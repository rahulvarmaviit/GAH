
'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useRouter } from 'next/navigation';

const initialEvents = [
    { name: "Future of AI Summit", location: "Virtual Event", date: "2024-10-26", status: "scheduled" as const, image: "https://picsum.photos/seed/4001/40/40" },
    { name: "Innovate & Create Hackathon", location: "Tech Hub, Silicon Valley", date: "2024-11-15", status: "scheduled" as const, image: "https://picsum.photos/seed/4003/40/40" },
    { name: "Product Launch: The Next Generation", location: "Live Streamed Globally", date: "2024-12-05", status: "draft" as const, image: "https://picsum.photos/seed/4004/40/40" },
    { name: "Global Tech Networking Night", location: "Metropolis Convention Center", date: "2025-01-20", status: "scheduled" as const, image: "https://picsum.photos/seed/4002/40/40" },
    { name: "Web 3.0 Conference 2023", location: "Austin, TX", date: "2023-08-12", status: "archived" as const, image: "https://picsum.photos/seed/2001/40/40" },
];

export interface Event {
  name: string;
  location: string;
  date: string;
  status: 'draft' | 'scheduled' | 'archived' | 'cancelled';
  image?: string;
  description?: string;
}

export default function EventsAdminPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    } else {
      setEvents(initialEvents);
      localStorage.setItem('events', JSON.stringify(initialEvents));
    }
  }, []);

  const handleDeleteEvent = () => {
    if (eventToDelete === null) return;
    const updatedEvents = events.filter((_, index) => index !== eventToDelete);
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEventToDelete(null);
  };

  const getBadgeVariant = (status: Event['status']): "outline" | "default" | "secondary" | "destructive" => {
    switch (status) {
      case 'scheduled':
        return 'default';
      case 'draft':
        return 'outline';
      case 'archived':
        return 'secondary';
      case 'cancelled':
        return 'destructive';
    }
  }

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <>
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Events</CardTitle>
            <CardDescription>Manage your company's events.</CardDescription>
          </div>
          <Button asChild size="sm" className="gap-1">
            <Link href="/admin/events/new">
                <PlusCircle className="h-4 w-4" />
                Add Event
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='hidden w-[100px] sm:table-cell'>Banner</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className='hidden md:table-cell'>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {events.map((event, index) => (
                    <TableRow key={index}>
                        <TableCell className='hidden sm:table-cell'>
                            <Image
                                alt={event.name}
                                className="aspect-square rounded-md object-cover"
                                height="40"
                                src={event.image || "https://picsum.photos/seed/placeholder/40/40"}
                                width="40"
                            />
                        </TableCell>
                        <TableCell className="font-medium">{event.name}</TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell className='hidden md:table-cell'>{event.date}</TableCell>
                        <TableCell>
                            <Badge variant={getBadgeVariant(event.status)}>
                                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                            </Badge>
                        </TableCell>
                         <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem onClick={() => router.push(`/admin/events/${index}`)}>Edit</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setEventToDelete(index)}>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </CardContent>
    </Card>

     <AlertDialog open={eventToDelete !== null} onOpenChange={(open) => !open && setEventToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this event.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setEventToDelete(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteEvent}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
