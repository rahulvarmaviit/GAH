
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
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation';

const initialProducts = [
    { name: "Quantum Drone", category: "tech" as const, price: "$1,200.00", status: "active" as const, image: "https://picsum.photos/seed/3001/40/40" },
    { name: "HoloWatch", category: "wearables" as const, price: "$899.99", status: "active" as const, image: "https://picsum.photos/seed/3002/40/40" },
    { name: "NeuroLink VR", category: "vr" as const, price: "$1,500.00", status: "draft" as const, image: "https://picsum.photos/seed/3003/40/40" },
    { name: "Aura Home Hub", category: "smart-home" as const, price: "$299.00", status: "active" as const, image: "https://picsum.photos/seed/3004/40/40" },
    { name: "Atlas Companion Bot", category: "robotics" as const, price: "$2,500.00", status: "archived" as const, image: "https://picsum.photos/seed/3005/40/40" },
];

export interface Product {
  name: string;
  category: 'tech' | 'wearables' | 'vr' | 'robotics' | 'smart-home';
  price: string;
  status: 'draft' | 'active' | 'archived';
  image?: string;
  description?: string;
}

export default function ProductsAdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('products', JSON.stringify(initialProducts));
    }
  }, []);

  const handleDeleteProduct = () => {
    if (productToDelete === null) return;
    const updatedProducts = products.filter((_, index) => index !== productToDelete);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setProductToDelete(null);
  };

  const getBadgeVariant = (status: 'draft' | 'active' | 'archived'): "outline" | "default" | "secondary" => {
    switch (status) {
      case 'active':
        return 'default';
      case 'draft':
        return 'outline';
      case 'archived':
        return 'secondary';
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
            <CardTitle>Products</CardTitle>
            <CardDescription>Manage your company's products.</CardDescription>
          </div>
          <Button asChild size="sm" className="gap-1">
            <Link href="/admin/products/new">
                <PlusCircle className="h-4 w-4" />
                Add Product
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='hidden w-[100px] sm:table-cell'>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className='hidden md:table-cell'>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product, index) => (
                    <TableRow key={index}>
                        <TableCell className='hidden sm:table-cell'>
                            <Image
                                alt={product.name}
                                className="aspect-square rounded-md object-cover"
                                height="40"
                                src={product.image || "https://picsum.photos/seed/placeholder/40/40"}
                                width="40"
                            />
                        </TableCell>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell className='hidden md:table-cell'>{product.price}</TableCell>
                        <TableCell>
                            <Badge variant={getBadgeVariant(product.status)}>
                                {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
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
                                <DropdownMenuItem onClick={() => router.push(`/admin/products/${index}`)}>Edit</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setProductToDelete(index)}>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </CardContent>
    </Card>

    <AlertDialog open={productToDelete !== null} onOpenChange={(open) => !open && setProductToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this product.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setProductToDelete(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteProduct}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
