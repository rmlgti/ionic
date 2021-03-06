import { CommonModule, DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, NgZone } from '@angular/core';
import { IonicConfig } from '@ionic/core';

import { appInitialize } from './app-initialize';
import { BooleanValueAccessor } from './directives/control-value-accessors/boolean-value-accessor';
import { NumericValueAccessor } from './directives/control-value-accessors/numeric-value-accesssor';
import { RadioValueAccessor } from './directives/control-value-accessors/radio-value-accessor';
import { SelectValueAccessor } from './directives/control-value-accessors/select-value-accessor';
import { TextValueAccessor } from './directives/control-value-accessors/text-value-accessor';
import { CssUtilsDeprecations } from './directives/css-utils-deprecations';
import { IonBackButtonDelegate } from './directives/navigation/ion-back-button';
import { IonRouterOutlet } from './directives/navigation/ion-router-outlet';
import { IonTabs } from './directives/navigation/ion-tabs';
import { NavDelegate } from './directives/navigation/nav-delegate';
import { RouterLinkDelegate } from './directives/navigation/router-link-delegate';
import { IonApp, IonAvatar, IonBackButton, IonBackdrop, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonNav, IonNavLink, IonNavPop, IonNavPush, IonNavSetRoot, IonNote, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSkeletonText, IonSlide, IonSlides, IonSpinner, IonSplitPane, IonTabBar, IonTabButton, IonText, IonTextarea, IonThumbnail, IonTitle, IonToggle, IonToolbar } from './directives/proxies';
import { VirtualFooter } from './directives/virtual-scroll/virtual-footer';
import { VirtualHeader } from './directives/virtual-scroll/virtual-header';
import { VirtualItem } from './directives/virtual-scroll/virtual-item';
import { IonVirtualScroll } from './directives/virtual-scroll/virtual-scroll';
import { AngularDelegate } from './providers/angular-delegate';
import { ConfigToken } from './providers/config';
import { ModalController } from './providers/modal-controller';
import { PopoverController } from './providers/popover-controller';

const DECLARATIONS = [
  // proxies
  IonApp,
  IonAvatar,
  IonBackButton,
  IonBackdrop,
  IonBadge,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonChip,
  IonCol,
  IonContent,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonFabList,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonNav,
  IonNavLink,
  IonNavPop,
  IonNavPush,
  IonNavSetRoot,
  IonNote,
  IonProgressBar,
  IonRadio,
  IonRadioGroup,
  IonRange,
  IonRefresher,
  IonRefresherContent,
  IonReorder,
  IonReorderGroup,
  IonRippleEffect,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonSelect,
  IonSelectOption,
  IonSkeletonText,
  IonSlide,
  IonSlides,
  IonSpinner,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonText,
  IonTextarea,
  IonThumbnail,
  IonToggle,
  IonToolbar,
  IonTitle,

  IonTabs,

  // ngModel accessors
  BooleanValueAccessor,
  NumericValueAccessor,
  RadioValueAccessor,
  SelectValueAccessor,
  TextValueAccessor,

  // navigation
  IonRouterOutlet,
  IonBackButtonDelegate,
  NavDelegate,
  RouterLinkDelegate,

  // virtual scroll
  VirtualFooter,
  VirtualHeader,
  VirtualItem,
  IonVirtualScroll,

  // Deprecations
  CssUtilsDeprecations
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  providers: [AngularDelegate, ModalController, PopoverController],
  imports: [CommonModule]
})
export class IonicModule {
  static forRoot(config?: IonicConfig): ModuleWithProviders {
    return {
      ngModule: IonicModule,
      providers: [
        {
          provide: ConfigToken,
          useValue: config
        },
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true,
          deps: [
            ConfigToken,
            DOCUMENT,
            NgZone
          ]
        }
      ]
    };
  }
}
