
import React from 'react'; 
import { ProductCard } from './product-card';
import { Product } from '@prisma/client';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { Pagination } from '../ui';
import { PaginationEllipsis, PaginationItem, PaginationLink } from '../ui/pagination';

interface Props {
    className?: string;
}

export const PaginationShop: React. FC<Props> = ({ className }) => {
    
    return (
        <Pagination className="catalog__nav-pages">
            <PaginationLink className="catalog__page" href={'#'}>1</PaginationLink>
            <PaginationLink className="catalog__page" href={'#'}>2</PaginationLink>
            <PaginationEllipsis className="catalog__page_next"/>
        </Pagination>
    );
};

