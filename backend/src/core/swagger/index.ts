import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './options';

export const swaggerSpecs = swaggerJsdoc(swaggerOptions);
