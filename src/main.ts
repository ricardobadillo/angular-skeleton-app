// Angular.
import { bootstrapApplication } from '@angular/platform-browser';

// Componentes.
import { App } from './app/app';

// Configuración de la aplicación.
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig).catch((error) => console.error(error));
