// Angular.
import { bootstrapApplication } from '@angular/platform-browser';

// Componentes.
import { App } from './app/app';

// Configuración de la aplicación.
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(App, config);

export default bootstrap;
