import { DocumentBuilder } from "@nestjs/swagger";

export default new DocumentBuilder()
    .setTitle('K8 CRUD')
    .setDescription('The sample app for deploying application to Kubernetes')
    .setVersion('1.0')
    .addTag('K8_CRUD')
    .build();