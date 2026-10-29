import { Component, ElementRef, ViewChild } from '@angular/core';

interface Project { id: string; name: string; type: string; description: string; stack: string[]; features: string[]; number: string; demoUrl?: string; }
@Component({selector: 'app-root', standalone: true, templateUrl: './app.component.html'})
export class AppComponent {
  @ViewChild('projectDialog') projectDialog!: ElementRef<HTMLDialogElement>;
  selected: Project | null = null;
  filter = 'Todos';
  filters = ['Todos', 'Productividad', 'Comercio', 'APIs y datos'];
  projects: Project[] = [
    { id:'tasks', number:'01', demoUrl:'https://taskflow-indol-sigma.vercel.app/', name:'Taskflow', type:'Productividad', description:'Un lugar para organizar el trabajo y concentrarse en lo que sigue.', stack:['Angular','Spring Boot','PostgreSQL'], features:['Tareas con estados, prioridades y fechas límite','Búsqueda, filtros y paginación desde el servidor','Autenticación y tareas privadas por usuario'] },
    { id:'shop', number:'02', demoUrl:'https://commerce.santiagocasallas.qzz.io/', name:'Mini Commerce', type:'Comercio', description:'Del catálogo al pedido, una experiencia de compra sin pagos reales.', stack:['Angular','Spring Boot','PostgreSQL'], features:['Catálogo y carrito con cantidades editables','Pedidos simulados y validación de inventario','Panel para administrar productos'] },
    { id:'weather', number:'03', name:'City Weather', type:'APIs y datos', description:'Explora el pronóstico de una ciudad y vuelve a tus lugares favoritos.', stack:['Angular','Spring Boot','Open-Meteo'], features:['Búsqueda de ciudades y pronóstico','Historial de consultas por usuario','Backend intermediario con caché y manejo de errores'] },
    { id:'notes', number:'04', name:'Second Brain', type:'Productividad', description:'Un espacio personal para conectar ideas y encontrar lo que importa.', stack:['Angular','Spring Boot','PostgreSQL'], features:['Crear, editar y archivar notas personales','Organización por etiquetas y búsqueda','Editor Markdown y acceso privado'] }
  ];
  get visibleProjects() { return this.projects.filter(p => this.filter === 'Todos' || p.type === this.filter); }
  open(project: Project) { this.selected = project; this.projectDialog.nativeElement.showModal(); }
  close() { this.projectDialog.nativeElement.close(); this.selected = null; }
}
