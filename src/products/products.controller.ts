import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    const generatedId = this.productsService.addProduct(
      title,
      description,
      price,
    );
    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProduct(id);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: Product) {
    this.productsService.updateProduct(
      id,
      body.title,
      body.description,
      body.price,
    );
    return null;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    this.productsService.deleteProduct(id);
    return null;
  }
}
