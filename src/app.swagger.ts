import { DocumentBuilder , SwaggerModule} from '@nestjs/swagger';
import { INestApplication} from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
    const swaggerConfig = new DocumentBuilder()
    //.addBearerAuth()
    .setTitle('Linkedin Clone')
    .setDescription('Routes Available')
    .setVersion('1.0')
    .build();
    const document = SwaggerModule.createDocument(app,swaggerConfig);
    SwaggerModule.setup('api/docs',app, document,{
        swaggerOptions:{
            filter:true
        }
    });
};