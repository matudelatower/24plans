Ésta interfaz corresponde a la página #8 del PDF.

Faltantes

* opción de compartir sociales en imágenes
* opción de like en imágenes
( -- estos también están en vista new -- )

Para la implementación de los tabs resolver la falta de compatibilidad entre el scroll infinito y los tabs.
Resuelto temporalmente con fab-button

<!-- Propuesta alternativa, permite deslizar el menu con la pantalla -->
  <ion-fab vertical="bottom" slot="fixed">
    
    <ion-fab-button routerLink="/home">
      <ion-icon name="home-outline"></ion-icon>
    </ion-fab-button>
    
    <ion-fab-button routerLink="/favorites">
      <ion-icon name="star-outline"></ion-icon>
    </ion-fab-button>

    <ion-fab-button routerLink="/new">
      <ion-icon name="duplicate-outline"></ion-icon>
    </ion-fab-button>

    <ion-fab-button routerLink="/notifications">
      <ion-icon name="notifications-outline"></ion-icon>
    </ion-fab-button>

    <ion-fab-button routerLink="/settings">
      <ion-icon name="arrow-up-circle"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- Propuesta original de tabs para navegación, queda sobre la interfaz y arruina el modelo -->
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home" routerLink="/home">
        <ion-icon name="home-outline"></ion-icon>
        <ion-label>Inicio</ion-label>
      </ion-tab-button>
  
      <ion-tab-button tab="favorites" routerLink="/favorites">
        <ion-icon name="star-outline"></ion-icon>
        <ion-label>Favotiros</ion-label>
      </ion-tab-button>
  
      <ion-tab-button class="btnPlus" tab="new" routerLink="/new">
        <ion-icon name="duplicate-outline"></ion-icon>
        <ion-label>Crear Evento</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="notifications" routerLink="/notifications">
        <ion-icon name="notifications-outline"></ion-icon>
        <ion-label>Notificaciones</ion-label>
      </ion-tab-button>
  
      <ion-tab-button tab="settings" routerLink="/settings">
        <ion-icon name="person-outline"></ion-icon>
        <ion-label>Mi cuenta</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>

  