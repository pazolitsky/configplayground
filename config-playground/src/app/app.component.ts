import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'config-playground';
  differences!:any;

   json1 = {"beaconO22":"17",
   "primo-view" : {
     "available-tabs" : [ "Everything", "LibraryCatalog", "CentralIndex", "Research", "CourseReserves", "Ebsco" ],
     "institution" : {
       "description" : "The Clean Training environment",
       "id" : 521,
       "org-fields" : {
         "customer-code" : "TRAINING_1_INST",
         "customer-id" : 510,
         "institution-id" : 521
       },
       "is-org-fields-set" : true,
       "institution-code" : "TRAINING_1_INST",
       "institution-name" : "Clean Training",
       "last-modified-time-stamp" : "Mar 17, 2014 17:59:36 PM",
       "updated-by" : "train_master_sandbox",
       "newspapers-search" : true
     },
     "pc-availability-tab-scopes-map" : {
       "Everything" : {
         "MyInst_and_CI" : "AVAILABLE_ONLY"
       },
       "CentralIndex" : {
         "CentralIndex" : "AVAILABLE_ONLY"
       }
     },
     "view-org-level" : {
       "customer-code" : "TRAINING_1_INST",
       "customer-id" : 510,
       "institution-id" : 521
     },
     "attributes-map" : {
       "tabsRemote" : "false",
       "css" : "Primo_default.3.0.css",
       "sessionTimeoutURL" : "",
       "interfaceLanguageOptions" : "cs,en,he,ko",
       "threeLettersLanguagesOptions" : "cs,en,he,ko",
       "libCard" : "true",
       "defaultUserInstitution" : "Clean Training",
       "customerCode" : "CUSTOMER",
       "layout" : "custom layout",
       "bulkSizeOptions" : "10;20;30;50",
       "institution" : "Clean Training",
       "bulkSize" : "10",
       "supportedDocumentsLanguageOptions" : "iw;en;nl;kl;fr",
       "interfaceLanguage" : "en",
       "institutionCode" : "TRAINING_1_INST",
       "mobileCss" : "mobile.css",
       "ownerInstituionCode" : "VOLCANO",
       "citationTrailsEnabled" : true,
       "citationTrailsFilterByAvailability" : true,
       "selectedFacetLocation" : "right",
       "personalizationEnabled" : true,
       "moreLikeCourse" : true,
       "moreLikeCollection" : true,
       "collectionDiscoveryEnabled" : true,
       "displayNewspapersLink" : true,
       "displayFeaturedNewspapers" : true,
       "refEntryActive" : true,
       "relatedItemsActive" : true,
       "legantoURLTemplate" : "",
       "multilingualConfigurationEnabled" : true,
       "journalCategoriesTree" : true,
       "newspaperSearchFilterByAvailability" : true,
       "displayVoiceSearch" : true,
       "displayLibraryNameLocationFacet" : false,
       "virtualBrowseType" : "bib",
       "editMyLibraryCard" : true,
       "mayAlsoBeHeldByEnabled" : true
     },
     "auto-complete-enabled-map" : {
       "CentralIndex" : true,
       "MyInst_and_CI" : true,
       "jsearch_scope" : false,
       "Research" : true,
       "CourseReserves" : true,
       "MyInstitution" : true,
       "ebsco" : true
     },
     "scopes" : [ {
       "scope-id" : "MyInst_and_CI",
       "locations" : "Local,primo_central_multiple_fe",
       "types" : "local,adaptor",
       "tab" : "Everything",
       "tab-id-for-scope-matching" : "Everything",
       "contains-central-index-scope" : true
     }, {
       "scope-id" : "MyInstitution",
       "locations" : "Local",
       "types" : "local",
       "tab" : "LibraryCatalog",
       "tab-id-for-scope-matching" : "LibraryCatalog",
       "contains-central-index-scope" : false
     }, {
       "scope-id" : "CentralIndex",
       "locations" : "primo_central_multiple_fe",
       "types" : "adaptor",
       "tab" : "CentralIndex",
       "tab-id-for-scope-matching" : "CentralIndex",
       "contains-central-index-scope" : true
     }, {
       "scope-id" : "CourseReserves",
       "locations" : "Local",
       "types" : "local",
       "tab" : "CourseReserves",
       "tab-id-for-scope-matching" : "CourseReserves",
       "contains-central-index-scope" : false
     }, {
       "scope-id" : "ebsco",
       "locations" : "EbscoLocal",
       "types" : "adaptor",
       "tab" : "Ebsco",
       "tab-id-for-scope-matching" : "Ebsco",
       "contains-central-index-scope" : false
     } ],
     "cdi-ft-search-tab-scopes-map" : {
       "Everything" : {
         "MyInst_and_CI" : "no-always"
       },
       "CentralIndex" : {
         "CentralIndex" : "no-always"
       }
     },
     "timeout" : {
       "guest-ui-timeout" : "0"
     },
     "is-union-catalog-view" : false,
     "display-unpaywall-links" : true,
     "display_quick_links" : "true"
   },
   "tiles" : {
     "HeaderTileInterface" : { },
     "FacetTileInterface" : {
       "TRAINING_1_INST:Auto1.FacetTileInterface.LibraryCatalog" : {
         "toplevelfacet" : true,
         "toplevelsidefacet" : false,
         "generalpageactions" : false,
         "facetview" : [ {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 5,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_tlevel",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_topic",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_creator",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "alpha_numeric",
             "_int" : 1
           },
           "id" : "facet_library",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "alpha_numeric",
             "_int" : 1
           },
           "id" : "facet_location_code",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_rtype",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_domain",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_creationdate",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_jtitle",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_lang",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "none",
             "_int" : 1
           },
           "id" : "facet_newrecords",
           "useTranslations" : false
         } ],
         "relatedfacetview" : { },
         "id" : "TRAINING_1_INST:Auto1.FacetTileInterface.LibraryCatalog"
       },
       "TRAINING_1_INST:Auto1.FacetTileInterface.jsearch_slot" : {
         "toplevelfacet" : true,
         "toplevelsidefacet" : false,
         "generalpageactions" : false,
         "facetview" : [ {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 5,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_tlevel",
           "useTranslations" : false
         } ],
         "relatedfacetview" : { },
         "id" : "TRAINING_1_INST:Auto1.FacetTileInterface.jsearch_slot"
       },
       "TRAINING_1_INST:Auto1.FacetTileInterface.Ebsco" : {
         "toplevelfacet" : true,
         "toplevelsidefacet" : false,
         "generalpageactions" : false,
         "facetview" : [ {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 5,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_tlevel",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_topic",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_creator",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "alpha_numeric",
             "_int" : 1
           },
           "id" : "facet_library",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "alpha_numeric",
             "_int" : 1
           },
           "id" : "facet_location_code",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_rtype",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_domain",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_creationdate",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_jtitle",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_lang",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "none",
             "_int" : 1
           },
           "id" : "facet_newrecords",
           "useTranslations" : false
         } ],
         "relatedfacetview" : { },
         "id" : "TRAINING_1_INST:Auto1.FacetTileInterface.Ebsco"
       },
       "TRAINING_1_INST:Auto1.FacetTileInterface.Research" : {
         "toplevelfacet" : true,
         "toplevelsidefacet" : false,
         "generalpageactions" : false,
         "facetview" : [ {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 5,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_tlevel",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_topic",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_creator",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "alpha_numeric",
             "_int" : 1
           },
           "id" : "facet_library",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "alpha_numeric",
             "_int" : 1
           },
           "id" : "facet_location_code",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_rtype",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_domain",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_creationdate",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_jtitle",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_lang",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "none",
             "_int" : 1
           },
           "id" : "facet_newrecords",
           "useTranslations" : false
         } ],
         "relatedfacetview" : { },
         "id" : "TRAINING_1_INST:Auto1.FacetTileInterface.Research"
       },
       "TRAINING_1_INST:Auto1.FacetTileInterface.CentralIndex" : {
         "toplevelfacet" : true,
         "toplevelsidefacet" : false,
         "generalpageactions" : false,
         "facetview" : [ {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 5,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_tlevel",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_topic",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_creator",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "alpha_numeric",
             "_int" : 1
           },
           "id" : "facet_library",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "alpha_numeric",
             "_int" : 1
           },
           "id" : "facet_location_code",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_rtype",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_domain",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_creationdate",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_jtitle",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_lang",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "none",
             "_int" : 1
           },
           "id" : "facet_newrecords",
           "useTranslations" : false
         } ],
         "relatedfacetview" : { },
         "id" : "TRAINING_1_INST:Auto1.FacetTileInterface.CentralIndex"
       },
       "TRAINING_1_INST:Auto1.FacetTileInterface.CourseReserves" : {
         "toplevelfacet" : true,
         "toplevelsidefacet" : false,
         "generalpageactions" : false,
         "facetview" : [ {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "alpha_numeric",
             "_int" : 1
           },
           "id" : "facet_crsinstrc",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "alpha_numeric",
             "_int" : 1
           },
           "id" : "facet_crsid_name",
           "useTranslations" : false
         } ],
         "relatedfacetview" : { },
         "id" : "TRAINING_1_INST:Auto1.FacetTileInterface.CourseReserves"
       },
       "TRAINING_1_INST:Auto1.FacetTileInterface.Everything" : {
         "toplevelfacet" : true,
         "toplevelsidefacet" : false,
         "generalpageactions" : false,
         "facetview" : [ {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 5,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_tlevel",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_topic",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_creator",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "alpha_numeric",
             "_int" : 1
           },
           "id" : "facet_library",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "alpha_numeric",
             "_int" : 1
           },
           "id" : "facet_location_code",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_rtype",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_domain",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_creationdate",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_jtitle",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "by_size",
             "_int" : 1
           },
           "id" : "facet_lang",
           "useTranslations" : false
         }, {
           "display" : true,
           "viewinstsort" : false,
           "instsort" : false,
           "valid" : true,
           "count" : 0,
           "sort" : {
             "_string" : "none",
             "_int" : 1
           },
           "id" : "facet_newrecords",
           "useTranslations" : false
         } ],
         "relatedfacetview" : { },
         "id" : "TRAINING_1_INST:Auto1.FacetTileInterface.Everything"
       }
     },
     "KeepingItemTileInterface" : {
       "TRAINING_1_INST:Auto1.KeepingItemTileInterface" : {
         "keepingitemfunctionview" : [ ],
         "id" : "Auto1.KeepingItemTileInterface"
       }
     },
     "MainMenuTileInterface" : {
       "TRAINING_1_INST:Auto1.MainMenuTileInterface" : {
         "mainview" : [ {
           "url" : "jsearch",
           "label" : "JournalSearch",
           "target" : "_self"
         }, {
           "url" : "tags",
           "label" : "tags",
           "target" : "_self"
         }, {
           "url" : "/discovery/search?vid=TRAINING_1_INST:Auto1",
           "label" : "LibrarySearch",
           "target" : "_self"
         }, {
           "url" : "BlankIll",
           "label" : "BlankIll",
           "target" : "_self"
         }, {
           "url" : "citationlinker",
           "label" : "citationlinker",
           "target" : "_self"
         }, {
           "url" : "bsearch",
           "label" : "BrowseSearch",
           "target" : "_self"
         }, {
           "url" : "/discovery/collectionDiscovery?vid=TRAINING_1_INST:Auto1",
           "label" : "CollectionDiscovery",
           "target" : "_self"
         }, {
           "url" : "/discovery/npsearch?vid=TRAINING_1_INST:Auto1",
           "label" : "NewspaperSearch",
           "target" : "_self"
         } ],
         "id" : "TRAINING_1_INST:Auto1.MainMenuTileInterface"
       }
     },
     "StaticHTMLTileInterface" : {
       "TRAINING_1_INST:Auto1.StaticHTMLTileInterface" : {
         "news" : "/static_htmls/news.html",
         "featured" : "/static_htmls/featured.html",
         "signinTips" : "/static_htmls/signin_tips.html",
         "ideasFull" : "/static_htmls/ideasfull.jsp",
         "atoz" : "/static_htmls/atoz.html",
         "footer" : "/static_htmls/footer.html",
         "service" : "/static_htmls/service.html",
         "signin" : "/static_htmls/singin.html",
         "noResults" : "/static_htmls/noResults.html",
         "header" : "/static_htmls/header.html",
         "ideasBrief" : "/static_htmls/ideasbrief.jsp",
         "browse" : "/static_htmls/browse.html"
       }
     },
     "SearchTileInterface" : {
       "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.LibraryCatalog" : {
         "qtvinstance" : [ {
           "qtvid" : "TRAINING_1_INST:Auto1.searchbox_complex.LibraryCatalog"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.mediaType.LibraryCatalog"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.language.LibraryCatalog"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.date_range.LibraryCatalog"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.prescisionOperators.LibraryCatalog"
         } ],
         "prefiltersenable" : false,
         "indexedPrefiltersenable" : false,
         "resourcetypePrefiltersenable" : false,
         "alphabeticLanguagesSort" : true
       },
       "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.CourseReserves" : {
         "qtvinstance" : [ {
           "qtvid" : "TRAINING_1_INST:Auto1.searchbox_complex.CourseReserves"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.mediaType.CourseReserves"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.language.CourseReserves"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.date_range.CourseReserves"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.prescisionOperators.CourseReserves"
         } ],
         "prefiltersenable" : false,
         "indexedPrefiltersenable" : false,
         "resourcetypePrefiltersenable" : false,
         "alphabeticLanguagesSort" : false
       },
       "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.Research" : {
         "qtvinstance" : [ {
           "qtvid" : "TRAINING_1_INST:Auto1.searchbox_complex.Research"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.mediaType.Research"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.language.Research"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.date_range.Research"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.prescisionOperators.Research"
         } ],
         "prefiltersenable" : false,
         "indexedPrefiltersenable" : false,
         "resourcetypePrefiltersenable" : false,
         "alphabeticLanguagesSort" : false
       },
       "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.Ebsco" : {
         "qtvinstance" : [ {
           "qtvid" : "TRAINING_1_INST:Auto1.searchbox_complex.Ebsco"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.mediaType.Ebsco"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.language.Ebsco"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.date_range.Ebsco"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.prescisionOperators.Ebsco"
         } ],
         "prefiltersenable" : false,
         "indexedPrefiltersenable" : false,
         "resourcetypePrefiltersenable" : false,
         "alphabeticLanguagesSort" : false
       },
       "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.Everything" : {
         "qtvinstance" : [ {
           "qtvid" : "TRAINING_1_INST:Auto1.searchbox_complex.Everything"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.mediaType.Everything"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.language.Everything"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.date_range.Everything"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.prescisionOperators.Everything"
         } ],
         "prefiltersenable" : false,
         "indexedPrefiltersenable" : false,
         "resourcetypePrefiltersenable" : false,
         "alphabeticLanguagesSort" : true
       },
       "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.Ebsco" : {
         "qtvinstance" : [ {
           "qtvid" : "TRAINING_1_INST:Auto1.searchbox_complex.Ebsco"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.mediaType.Ebsco"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.language.Ebsco"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.date_range.Ebsco"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.prescisionOperators.Ebsco"
         } ],
         "prefiltersenable" : false,
         "indexedPrefiltersenable" : false,
         "resourcetypePrefiltersenable" : false,
         "alphabeticLanguagesSort" : true
       },
       "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.Everything" : {
         "qtvinstance" : [ {
           "qtvid" : "TRAINING_1_INST:Auto1.searchbox_complex.Everything"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.mediaType.Everything"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.language.Everything"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.date_range.Everything"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.prescisionOperators.Everything"
         } ],
         "prefiltersenable" : false,
         "indexedPrefiltersenable" : false,
         "resourcetypePrefiltersenable" : false,
         "alphabeticLanguagesSort" : false
       },
       "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.CentralIndex" : {
         "qtvinstance" : [ {
           "qtvid" : "TRAINING_1_INST:Auto1.searchbox_complex.CentralIndex"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.mediaType.CentralIndex"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.language.CentralIndex"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.date_range.CentralIndex"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.prescisionOperators.CentralIndex"
         } ],
         "prefiltersenable" : false,
         "indexedPrefiltersenable" : false,
         "resourcetypePrefiltersenable" : false,
         "alphabeticLanguagesSort" : true
       },
       "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.CentralIndex" : {
         "qtvinstance" : [ {
           "qtvid" : "TRAINING_1_INST:Auto1.searchbox_complex.CentralIndex"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.mediaType.CentralIndex"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.language.CentralIndex"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.date_range.CentralIndex"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.prescisionOperators.CentralIndex"
         } ],
         "prefiltersenable" : false,
         "indexedPrefiltersenable" : false,
         "resourcetypePrefiltersenable" : false,
         "alphabeticLanguagesSort" : false
       },
       "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.Research" : {
         "qtvinstance" : [ {
           "qtvid" : "TRAINING_1_INST:Auto1.searchbox_complex.Research"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.mediaType.Research"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.language.Research"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.date_range.Research"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.prescisionOperators.Research"
         } ],
         "prefiltersenable" : false,
         "indexedPrefiltersenable" : false,
         "resourcetypePrefiltersenable" : false,
         "alphabeticLanguagesSort" : true
       },
       "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.CourseReserves" : {
         "qtvinstance" : [ {
           "qtvid" : "TRAINING_1_INST:Auto1.searchbox_complex.CourseReserves"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.mediaType.CourseReserves"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.language.CourseReserves"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.date_range.CourseReserves"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.prescisionOperators.CourseReserves"
         } ],
         "prefiltersenable" : false,
         "indexedPrefiltersenable" : false,
         "resourcetypePrefiltersenable" : false,
         "alphabeticLanguagesSort" : true
       },
       "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.LibraryCatalog" : {
         "qtvinstance" : [ {
           "qtvid" : "TRAINING_1_INST:Auto1.searchbox_complex.LibraryCatalog"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.mediaType.LibraryCatalog"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.language.LibraryCatalog"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.date_range.LibraryCatalog"
         }, {
           "qtvid" : "TRAINING_1_INST:Auto1.prescisionOperators.LibraryCatalog"
         } ],
         "prefiltersenable" : false,
         "indexedPrefiltersenable" : false,
         "resourcetypePrefiltersenable" : false,
         "alphabeticLanguagesSort" : false
       }
     },
     "ResultFullTileInterface" : {
       "TRAINING_1_INST:Auto1.ResultFullTileInterface.Everything" : {
         "eshelf" : false,
         "delimiter" : ";",
         "getitbutton" : false,
         "resultlinks" : [ {
           "links" : "linktorsrc,addlink,backlink,sourcerecord,"
         } ],
         "resultitemview" : [ {
           "items" : "title,vertitle",
           "displayInViewer" : true
         }, {
           "items" : "creator,contributor",
           "displayInViewer" : true
         }, {
           "items" : "ispartof",
           "displayInViewer" : true
         }, {
           "items" : "dissertation",
           "displayInViewer" : true
         }, {
           "items" : "subject",
           "displayInViewer" : true
         }, {
           "items" : "mesh",
           "displayInViewer" : true
         }, {
           "items" : "genre",
           "displayInViewer" : true
         }, {
           "items" : "description",
           "displayInViewer" : true
         }, {
           "items" : "contents",
           "displayInViewer" : true
         }, {
           "items" : "addtitle",
           "displayInViewer" : true
         }, {
           "items" : "relation",
           "displayInViewer" : true
         }, {
           "items" : "series",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         }, {
           "items" : "creationdate",
           "displayInViewer" : true
         }, {
           "items" : "edition",
           "displayInViewer" : true
         }, {
           "items" : "format",
           "displayInViewer" : true
         }, {
           "items" : "frequency",
           "displayInViewer" : true
         }, {
           "items" : "source",
           "displayInViewer" : true
         }, {
           "items" : "boundwith",
           "displayInViewer" : true
         }, {
           "items" : "identifier",
           "displayInViewer" : true
         }, {
           "items" : "language",
           "displayInViewer" : true
         }, {
           "items" : "type",
           "displayInViewer" : true
         }, {
           "items" : "rights",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         } ],
         "authorityitemview" : [ {
           "items" : "heading",
           "displayInViewer" : true
         }, {
           "items" : "complex_reference",
           "displayInViewer" : true
         }, {
           "items" : "see_from_tracing",
           "displayInViewer" : true
         }, {
           "items" : "related_terms",
           "displayInViewer" : true
         }, {
           "items" : "source_data_found",
           "displayInViewer" : true
         }, {
           "items" : "source_data_not_found",
           "displayInViewer" : true
         }, {
           "items" : "biographical_or_historical_data",
           "displayInViewer" : true
         }, {
           "items" : "note",
           "displayInViewer" : true
         }, {
           "items" : "heading_linking_entry",
           "displayInViewer" : true
         }, {
           "items" : "other_standard_identifier",
           "displayInViewer" : true
         }, {
           "items" : "source_id",
           "displayInViewer" : true
         } ],
         "id" : "TRAINING_1_INST:Auto1.ResultFullTileInterface.Everything"
       },
       "TRAINING_1_INST:Auto1.ResultFullTileInterface.CourseReserves" : {
         "eshelf" : false,
         "delimiter" : ";",
         "getitbutton" : false,
         "resultlinks" : [ {
           "links" : "linktorsrc,addlink,backlink,sourcerecord,"
         } ],
         "resultitemview" : [ {
           "items" : "title,vertitle",
           "displayInViewer" : true
         }, {
           "items" : "creator,contributor",
           "displayInViewer" : true
         }, {
           "items" : "ispartof",
           "displayInViewer" : true
         }, {
           "items" : "dissertation",
           "displayInViewer" : true
         }, {
           "items" : "subject",
           "displayInViewer" : true
         }, {
           "items" : "mesh",
           "displayInViewer" : true
         }, {
           "items" : "genre",
           "displayInViewer" : true
         }, {
           "items" : "description",
           "displayInViewer" : true
         }, {
           "items" : "contents",
           "displayInViewer" : true
         }, {
           "items" : "addtitle",
           "displayInViewer" : true
         }, {
           "items" : "relation",
           "displayInViewer" : true
         }, {
           "items" : "series",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         }, {
           "items" : "creationdate",
           "displayInViewer" : true
         }, {
           "items" : "edition",
           "displayInViewer" : true
         }, {
           "items" : "format",
           "displayInViewer" : true
         }, {
           "items" : "frequency",
           "displayInViewer" : true
         }, {
           "items" : "source",
           "displayInViewer" : true
         }, {
           "items" : "boundwith",
           "displayInViewer" : true
         }, {
           "items" : "identifier",
           "displayInViewer" : true
         }, {
           "items" : "language",
           "displayInViewer" : true
         }, {
           "items" : "type",
           "displayInViewer" : true
         }, {
           "items" : "rights",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         } ],
         "authorityitemview" : [ {
           "items" : "heading",
           "displayInViewer" : true
         }, {
           "items" : "complex_reference",
           "displayInViewer" : true
         }, {
           "items" : "see_from_tracing",
           "displayInViewer" : true
         }, {
           "items" : "related_terms",
           "displayInViewer" : true
         }, {
           "items" : "source_data_found",
           "displayInViewer" : true
         }, {
           "items" : "source_data_not_found",
           "displayInViewer" : true
         }, {
           "items" : "biographical_or_historical_data",
           "displayInViewer" : true
         }, {
           "items" : "note",
           "displayInViewer" : true
         }, {
           "items" : "heading_linking_entry",
           "displayInViewer" : true
         }, {
           "items" : "other_standard_identifier",
           "displayInViewer" : true
         }, {
           "items" : "source_id",
           "displayInViewer" : true
         } ],
         "id" : "TRAINING_1_INST:Auto1.ResultFullTileInterface.CourseReserves"
       },
       "TRAINING_1_INST:Auto1.ResultFullTileInterface.Research" : {
         "eshelf" : false,
         "delimiter" : ";",
         "getitbutton" : false,
         "resultlinks" : [ {
           "links" : "linktorsrc,addlink,backlink,sourcerecord,"
         } ],
         "resultitemview" : [ {
           "items" : "title,vertitle",
           "displayInViewer" : true
         }, {
           "items" : "creator,contributor",
           "displayInViewer" : true
         }, {
           "items" : "ispartof",
           "displayInViewer" : true
         }, {
           "items" : "dissertation",
           "displayInViewer" : true
         }, {
           "items" : "subject",
           "displayInViewer" : true
         }, {
           "items" : "mesh",
           "displayInViewer" : true
         }, {
           "items" : "genre",
           "displayInViewer" : true
         }, {
           "items" : "description",
           "displayInViewer" : true
         }, {
           "items" : "contents",
           "displayInViewer" : true
         }, {
           "items" : "addtitle",
           "displayInViewer" : true
         }, {
           "items" : "relation",
           "displayInViewer" : true
         }, {
           "items" : "series",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         }, {
           "items" : "creationdate",
           "displayInViewer" : true
         }, {
           "items" : "edition",
           "displayInViewer" : true
         }, {
           "items" : "format",
           "displayInViewer" : true
         }, {
           "items" : "frequency",
           "displayInViewer" : true
         }, {
           "items" : "source",
           "displayInViewer" : true
         }, {
           "items" : "boundwith",
           "displayInViewer" : true
         }, {
           "items" : "identifier",
           "displayInViewer" : true
         }, {
           "items" : "language",
           "displayInViewer" : true
         }, {
           "items" : "type",
           "displayInViewer" : true
         }, {
           "items" : "rights",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         } ],
         "authorityitemview" : [ {
           "items" : "heading",
           "displayInViewer" : true
         }, {
           "items" : "complex_reference",
           "displayInViewer" : true
         }, {
           "items" : "see_from_tracing",
           "displayInViewer" : true
         }, {
           "items" : "related_terms",
           "displayInViewer" : true
         }, {
           "items" : "source_data_found",
           "displayInViewer" : true
         }, {
           "items" : "source_data_not_found",
           "displayInViewer" : true
         }, {
           "items" : "biographical_or_historical_data",
           "displayInViewer" : true
         }, {
           "items" : "note",
           "displayInViewer" : true
         }, {
           "items" : "heading_linking_entry",
           "displayInViewer" : true
         }, {
           "items" : "other_standard_identifier",
           "displayInViewer" : true
         }, {
           "items" : "source_id",
           "displayInViewer" : true
         } ],
         "id" : "TRAINING_1_INST:Auto1.ResultFullTileInterface.Research"
       },
       "TRAINING_1_INST:Auto1.ResultFullTileInterface.CentralIndex" : {
         "eshelf" : false,
         "delimiter" : ";",
         "getitbutton" : false,
         "resultlinks" : [ {
           "links" : "linktorsrc,addlink,backlink,sourcerecord,"
         } ],
         "resultitemview" : [ {
           "items" : "title,vertitle",
           "displayInViewer" : true
         }, {
           "items" : "creator,contributor",
           "displayInViewer" : true
         }, {
           "items" : "ispartof",
           "displayInViewer" : true
         }, {
           "items" : "dissertation",
           "displayInViewer" : true
         }, {
           "items" : "subject",
           "displayInViewer" : true
         }, {
           "items" : "mesh",
           "displayInViewer" : true
         }, {
           "items" : "genre",
           "displayInViewer" : true
         }, {
           "items" : "description",
           "displayInViewer" : true
         }, {
           "items" : "contents",
           "displayInViewer" : true
         }, {
           "items" : "addtitle",
           "displayInViewer" : true
         }, {
           "items" : "relation",
           "displayInViewer" : true
         }, {
           "items" : "series",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         }, {
           "items" : "creationdate",
           "displayInViewer" : true
         }, {
           "items" : "edition",
           "displayInViewer" : true
         }, {
           "items" : "format",
           "displayInViewer" : true
         }, {
           "items" : "frequency",
           "displayInViewer" : true
         }, {
           "items" : "source",
           "displayInViewer" : true
         }, {
           "items" : "boundwith",
           "displayInViewer" : true
         }, {
           "items" : "identifier",
           "displayInViewer" : true
         }, {
           "items" : "language",
           "displayInViewer" : true
         }, {
           "items" : "type",
           "displayInViewer" : true
         }, {
           "items" : "rights",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         } ],
         "authorityitemview" : [ {
           "items" : "heading",
           "displayInViewer" : true
         }, {
           "items" : "complex_reference",
           "displayInViewer" : true
         }, {
           "items" : "see_from_tracing",
           "displayInViewer" : true
         }, {
           "items" : "related_terms",
           "displayInViewer" : true
         }, {
           "items" : "source_data_found",
           "displayInViewer" : true
         }, {
           "items" : "source_data_not_found",
           "displayInViewer" : true
         }, {
           "items" : "biographical_or_historical_data",
           "displayInViewer" : true
         }, {
           "items" : "note",
           "displayInViewer" : true
         }, {
           "items" : "heading_linking_entry",
           "displayInViewer" : true
         }, {
           "items" : "other_standard_identifier",
           "displayInViewer" : true
         }, {
           "items" : "source_id",
           "displayInViewer" : true
         } ],
         "id" : "TRAINING_1_INST:Auto1.ResultFullTileInterface.CentralIndex"
       },
       "TRAINING_1_INST:Auto1.ResultFullTileInterface.jsearch_slot" : {
         "eshelf" : false,
         "delimiter" : ";",
         "getitbutton" : false,
         "resultlinks" : [ {
           "links" : "linktorsrc,addlink,backlink,sourcerecord,"
         } ],
         "resultitemview" : [ {
           "items" : "title,vertitle",
           "displayInViewer" : true
         }, {
           "items" : "creator,contributor",
           "displayInViewer" : true
         }, {
           "items" : "ispartof",
           "displayInViewer" : true
         }, {
           "items" : "dissertation",
           "displayInViewer" : true
         }, {
           "items" : "subject",
           "displayInViewer" : true
         }, {
           "items" : "mesh",
           "displayInViewer" : true
         }, {
           "items" : "genre",
           "displayInViewer" : true
         }, {
           "items" : "description",
           "displayInViewer" : true
         }, {
           "items" : "contents",
           "displayInViewer" : true
         }, {
           "items" : "addtitle",
           "displayInViewer" : true
         }, {
           "items" : "relation",
           "displayInViewer" : true
         }, {
           "items" : "series",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         }, {
           "items" : "creationdate",
           "displayInViewer" : true
         }, {
           "items" : "edition",
           "displayInViewer" : true
         }, {
           "items" : "format",
           "displayInViewer" : true
         }, {
           "items" : "frequency",
           "displayInViewer" : true
         }, {
           "items" : "source",
           "displayInViewer" : true
         }, {
           "items" : "boundwith",
           "displayInViewer" : true
         }, {
           "items" : "identifier",
           "displayInViewer" : true
         }, {
           "items" : "language",
           "displayInViewer" : true
         }, {
           "items" : "type",
           "displayInViewer" : true
         }, {
           "items" : "rights",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         } ],
         "authorityitemview" : [ {
           "items" : "heading",
           "displayInViewer" : true
         }, {
           "items" : "complex_reference",
           "displayInViewer" : true
         }, {
           "items" : "see_from_tracing",
           "displayInViewer" : true
         }, {
           "items" : "related_terms",
           "displayInViewer" : true
         }, {
           "items" : "source_data_found",
           "displayInViewer" : true
         }, {
           "items" : "source_data_not_found",
           "displayInViewer" : true
         }, {
           "items" : "biographical_or_historical_data",
           "displayInViewer" : true
         }, {
           "items" : "note",
           "displayInViewer" : true
         }, {
           "items" : "heading_linking_entry",
           "displayInViewer" : true
         }, {
           "items" : "other_standard_identifier",
           "displayInViewer" : true
         }, {
           "items" : "source_id",
           "displayInViewer" : true
         } ],
         "id" : "TRAINING_1_INST:Auto1.ResultFullTileInterface.jsearch_slot"
       },
       "TRAINING_1_INST:Auto1.ResultFullTileInterface.LibraryCatalog" : {
         "eshelf" : false,
         "delimiter" : ";",
         "getitbutton" : false,
         "resultlinks" : [ {
           "links" : "linktorsrc,addlink,backlink,sourcerecord,"
         } ],
         "resultitemview" : [ {
           "items" : "title,vertitle",
           "displayInViewer" : true
         }, {
           "items" : "creator,contributor",
           "displayInViewer" : true
         }, {
           "items" : "ispartof",
           "displayInViewer" : true
         }, {
           "items" : "dissertation",
           "displayInViewer" : true
         }, {
           "items" : "subject",
           "displayInViewer" : true
         }, {
           "items" : "mesh",
           "displayInViewer" : true
         }, {
           "items" : "genre",
           "displayInViewer" : true
         }, {
           "items" : "description",
           "displayInViewer" : true
         }, {
           "items" : "contents",
           "displayInViewer" : true
         }, {
           "items" : "addtitle",
           "displayInViewer" : true
         }, {
           "items" : "relation",
           "displayInViewer" : true
         }, {
           "items" : "series",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         }, {
           "items" : "creationdate",
           "displayInViewer" : true
         }, {
           "items" : "edition",
           "displayInViewer" : true
         }, {
           "items" : "format",
           "displayInViewer" : true
         }, {
           "items" : "frequency",
           "displayInViewer" : true
         }, {
           "items" : "source",
           "displayInViewer" : true
         }, {
           "items" : "boundwith",
           "displayInViewer" : true
         }, {
           "items" : "identifier",
           "displayInViewer" : true
         }, {
           "items" : "language",
           "displayInViewer" : true
         }, {
           "items" : "type",
           "displayInViewer" : true
         }, {
           "items" : "rights",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         } ],
         "authorityitemview" : [ {
           "items" : "heading",
           "displayInViewer" : true
         }, {
           "items" : "complex_reference",
           "displayInViewer" : true
         }, {
           "items" : "see_from_tracing",
           "displayInViewer" : true
         }, {
           "items" : "related_terms",
           "displayInViewer" : true
         }, {
           "items" : "source_data_found",
           "displayInViewer" : true
         }, {
           "items" : "source_data_not_found",
           "displayInViewer" : true
         }, {
           "items" : "biographical_or_historical_data",
           "displayInViewer" : true
         }, {
           "items" : "note",
           "displayInViewer" : true
         }, {
           "items" : "heading_linking_entry",
           "displayInViewer" : true
         }, {
           "items" : "other_standard_identifier",
           "displayInViewer" : true
         }, {
           "items" : "source_id",
           "displayInViewer" : true
         } ],
         "id" : "TRAINING_1_INST:Auto1.ResultFullTileInterface.LibraryCatalog"
       },
       "TRAINING_1_INST:Auto1.ResultFullTileInterface.Ebsco" : {
         "eshelf" : false,
         "delimiter" : ";",
         "getitbutton" : false,
         "resultlinks" : [ {
           "links" : "linktorsrc,addlink,backlink,sourcerecord,"
         } ],
         "resultitemview" : [ {
           "items" : "title,vertitle",
           "displayInViewer" : true
         }, {
           "items" : "creator,contributor",
           "displayInViewer" : true
         }, {
           "items" : "ispartof",
           "displayInViewer" : true
         }, {
           "items" : "dissertation",
           "displayInViewer" : true
         }, {
           "items" : "subject",
           "displayInViewer" : true
         }, {
           "items" : "mesh",
           "displayInViewer" : true
         }, {
           "items" : "genre",
           "displayInViewer" : true
         }, {
           "items" : "description",
           "displayInViewer" : true
         }, {
           "items" : "contents",
           "displayInViewer" : true
         }, {
           "items" : "addtitle",
           "displayInViewer" : true
         }, {
           "items" : "relation",
           "displayInViewer" : true
         }, {
           "items" : "series",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         }, {
           "items" : "creationdate",
           "displayInViewer" : true
         }, {
           "items" : "edition",
           "displayInViewer" : true
         }, {
           "items" : "format",
           "displayInViewer" : true
         }, {
           "items" : "frequency",
           "displayInViewer" : true
         }, {
           "items" : "source",
           "displayInViewer" : true
         }, {
           "items" : "boundwith",
           "displayInViewer" : true
         }, {
           "items" : "identifier",
           "displayInViewer" : true
         }, {
           "items" : "language",
           "displayInViewer" : true
         }, {
           "items" : "type",
           "displayInViewer" : true
         }, {
           "items" : "rights",
           "displayInViewer" : true
         }, {
           "items" : "publisher",
           "displayInViewer" : true
         } ],
         "authorityitemview" : [ {
           "items" : "heading",
           "displayInViewer" : true
         }, {
           "items" : "complex_reference",
           "displayInViewer" : true
         }, {
           "items" : "see_from_tracing",
           "displayInViewer" : true
         }, {
           "items" : "related_terms",
           "displayInViewer" : true
         }, {
           "items" : "source_data_found",
           "displayInViewer" : true
         }, {
           "items" : "source_data_not_found",
           "displayInViewer" : true
         }, {
           "items" : "biographical_or_historical_data",
           "displayInViewer" : true
         }, {
           "items" : "note",
           "displayInViewer" : true
         }, {
           "items" : "heading_linking_entry",
           "displayInViewer" : true
         }, {
           "items" : "other_standard_identifier",
           "displayInViewer" : true
         }, {
           "items" : "source_id",
           "displayInViewer" : true
         } ],
         "id" : "TRAINING_1_INST:Auto1.ResultFullTileInterface.Ebsco"
       }
     },
     "ResultTileInterface" : {
       "TRAINING_1_INST:Auto1.ResultTileInterface.Everything" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : "; "
         }, {
           "items" : "creator,contributor",
           "delimiter" : "; "
         }, {
           "items" : "creationdate",
           "delimiter" : "; "
         }, {
           "items" : "ispartof",
           "delimiter" : "; "
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "rank,date_d,date_a,title,author",
         "frbrdisplay" : 0,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterface.Everything",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterface.CourseReserves" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : "; "
         }, {
           "items" : "creator,contributor",
           "delimiter" : "; "
         }, {
           "items" : "creationdate",
           "delimiter" : "; "
         }, {
           "items" : "ispartof",
           "delimiter" : "; "
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "rank,date_d,date_a,title,author",
         "frbrdisplay" : 0,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterface.CourseReserves",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.Research" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : ";"
         }, {
           "items" : "creator,contributor",
           "delimiter" : ";"
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "rank,date_d,date_a,title,author",
         "frbrdisplay" : 1,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.Research",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterface.LibraryCatalog" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : "; "
         }, {
           "items" : "creator,contributor",
           "delimiter" : "; "
         }, {
           "items" : "creationdate",
           "delimiter" : "; "
         }, {
           "items" : "ispartof",
           "delimiter" : "; "
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "rank,date_d,date_a,title,author",
         "frbrdisplay" : 0,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterface.LibraryCatalog",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.Ebsco" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : ";"
         }, {
           "items" : "creator,contributor",
           "delimiter" : ";"
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "rank,date_d,date_a,title,author",
         "frbrdisplay" : 1,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.Ebsco",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterface.jsearch_slot" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : "; "
         }, {
           "items" : "creator,contributor",
           "delimiter" : "; "
         }, {
           "items" : "creationdate",
           "delimiter" : "; "
         }, {
           "items" : "ispartof",
           "delimiter" : "; "
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "title,rank",
         "frbrdisplay" : 0,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterface.jsearch_slot",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.LibraryCatalog" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : ";"
         }, {
           "items" : "creator,contributor",
           "delimiter" : ";"
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "rank,date_d,date_a,title,author",
         "frbrdisplay" : 1,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.LibraryCatalog",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterface.Ebsco" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : "; "
         }, {
           "items" : "creator,contributor",
           "delimiter" : "; "
         }, {
           "items" : "creationdate",
           "delimiter" : "; "
         }, {
           "items" : "ispartof",
           "delimiter" : "; "
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "rank,date_d,date_a,title,author",
         "frbrdisplay" : 0,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterface.Ebsco",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.jsearch_slot" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : ";"
         }, {
           "items" : "creator,contributor",
           "delimiter" : ";"
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "title,rank",
         "frbrdisplay" : 1,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.jsearch_slot",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.Everything" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : ";"
         }, {
           "items" : "creator,contributor",
           "delimiter" : ";"
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "rank,date_d,date_a,title,author",
         "frbrdisplay" : 1,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.Everything",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterface.Research" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : "; "
         }, {
           "items" : "creator,contributor",
           "delimiter" : "; "
         }, {
           "items" : "creationdate",
           "delimiter" : "; "
         }, {
           "items" : "ispartof",
           "delimiter" : "; "
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "rank,date_d,date_a,title,author",
         "frbrdisplay" : 0,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterface.Research",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.CourseReserves" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : ";"
         }, {
           "items" : "creator,contributor",
           "delimiter" : ";"
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "rank,date_d,date_a,title,author",
         "frbrdisplay" : 1,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.CourseReserves",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterface.CentralIndex" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : "; "
         }, {
           "items" : "creator,contributor",
           "delimiter" : "; "
         }, {
           "items" : "creationdate",
           "delimiter" : "; "
         }, {
           "items" : "ispartof",
           "delimiter" : "; "
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "rank,date_d,date_a,title,author",
         "frbrdisplay" : 0,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterface.CentralIndex",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       },
       "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.CentralIndex" : {
         "ilsapi" : false,
         "bulksize" : 2,
         "eshelf" : true,
         "showsnip" : true,
         "resultview" : [ {
           "items" : "vertitle,title",
           "delimiter" : ";"
         }, {
           "items" : "creator,contributor",
           "delimiter" : ";"
         } ],
         "facebookenabled" : false,
         "linkabletitle" : "2",
         "sortby" : "rank,date_d,date_a,title,author",
         "frbrdisplay" : 1,
         "frbrsortby" : "date_d",
         "tabsorder" : {
           "items" : "searchWithinJournal,quickAccess,getit_link1,details,recommendations,tags,browseshelf,links,,moreFromTheSame,citations,timesCited"
         },
         "getall" : false,
         "showsnipifnotfound" : true,
         "boostinst" : false,
         "numofresults" : 10,
         "id" : "TRAINING_1_INST:Auto1.ResultTileInterfaceFrbrGeneric.CentralIndex",
         "displaysigninmsg" : true,
         "groupmessage" : 0
       }
     },
     "LocationsTileInterface" : {
       "TRAINING_1_INST:Auto1.LocationsTileInterface.CourseReserves" : {
         "viewinstsort" : false,
         "rta" : "none",
         "displayholdingsfilters" : true,
         "filtersop" : "all_filters",
         "instsort" : false,
         "id" : "TRAINING_1_INST:Auto1.LocationsTileInterface.CourseReserves"
       },
       "TRAINING_1_INST:Auto1.LocationsTileInterface.LibraryCatalog" : {
         "viewinstsort" : false,
         "rta" : "none",
         "displayholdingsfilters" : true,
         "filtersop" : "all_filters",
         "instsort" : false,
         "id" : "TRAINING_1_INST:Auto1.LocationsTileInterface.LibraryCatalog"
       },
       "TRAINING_1_INST:Auto1.LocationsTileInterface.Everything" : {
         "viewinstsort" : false,
         "rta" : "none",
         "displayholdingsfilters" : true,
         "filtersop" : "all_filters",
         "instsort" : false,
         "id" : "TRAINING_1_INST:Auto1.LocationsTileInterface.Everything"
       },
       "TRAINING_1_INST:Auto1.LocationsTileInterface.Research" : {
         "viewinstsort" : false,
         "rta" : "none",
         "displayholdingsfilters" : true,
         "filtersop" : "all_filters",
         "instsort" : false,
         "id" : "TRAINING_1_INST:Auto1.LocationsTileInterface.Research"
       },
       "TRAINING_1_INST:Auto1.LocationsTileInterface.CentralIndex" : {
         "viewinstsort" : false,
         "rta" : "none",
         "displayholdingsfilters" : true,
         "filtersop" : "all_filters",
         "instsort" : false,
         "id" : "TRAINING_1_INST:Auto1.LocationsTileInterface.CentralIndex"
       },
       "TRAINING_1_INST:Auto1.LocationsTileInterface.Ebsco" : {
         "viewinstsort" : false,
         "rta" : "none",
         "displayholdingsfilters" : true,
         "filtersop" : "all_filters",
         "instsort" : false,
         "id" : "TRAINING_1_INST:Auto1.LocationsTileInterface.Ebsco"
       },
       "TRAINING_1_INST:Auto1.LocationsTileInterface.jsearch_slot" : {
         "viewinstsort" : false,
         "rta" : "none",
         "displayholdingsfilters" : true,
         "filtersop" : "all_filters",
         "instsort" : false,
         "id" : "TRAINING_1_INST:Auto1.LocationsTileInterface.jsearch_slot"
       }
     }
   },
   "system-configuration" : {
     "Session Timeout" : "30",
     "Auto_Complete_Server_URL" : "https://primo-instant-apac.hosted.exlibrisgroup.com",
     "FE UI - Scrolling Threshold" : "10",
     "Auto_Complete_Feature_Enabled" : "true",
     "Use local fields 30-39 as lateral links" : "Y",
     "showICPLicenseFooter" : "false",
     "manualAlternativeEmailRS" : false,
     "GATHER_SEARCH_STAT" : "N",
     "GATHER_PAGE_STAT" : "N",
     "Show More (replaces scrolling) Threshold" : "50",
     "RUM_URL" : "http://il-beacon01/boom/apache_pb.gif",
     "Alma_Version" : "August 2024",
     "disable_cache" : false,
     "skip_delivery" : true,
     "skip_delivery_for_collection_discovery" : true,
     "skip_relations_delivery" : false,
     "split_mms_query" : false,
     "split_facets_max_wait" : 10000,
     "split_facets_wait_interval" : 1500,
     "Proxy_Server" : "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/",
     "Show ICP License Footer" : "false",
     "request item availability check timeout" : "3",
     "hostLB" : "http://il-adiz-vm.corp.exlibrisgroup.com:1801/",
     "unionViewScopeSuffix" : "_UCV",
     "ngrs_enabled" : false,
     "ngrs_implementation_mode" : false,
     "cdi_enable_global_title_catalog" : false,
     "ngrs_enable_best_offer_local_records" : false,
     "ngrs_pickup_anywhere" : false,
     "rapido_SA_rapidill_mode" : false,
     "rapido_lender_supply_directly_to_patron" : false,
     "activeAccessModelEnabled" : false,
     "number_of_representations" : "5",
     "use_facet_in_creator_hyperlink" : true,
     "tmp_enable_results_per_page" : true,
     "number_of_results_per_page_series" : "10,25,50",
     "activate_suspend_watchers_for_browser" : "ALL",
     "disable_suspend_watchers_for_x_results" : "20",
     "rapido_hide_how_to_get_it_section" : false,
     "delivery_bulk_from_brief" : false,
     "brief_results_journal_coverage" : false,
     "view_it_show_all_results" : false,
     "show_researcher_assistant_by_icon" : false,
     "show_researcher_assistant_by_widget" : false,
     "facet_alphanumeric_icelandic_sort" : false,
     "use_expanded_db_label" : true,
     "use_rapido_functionality" : false,
     "allow_self_registration" : false,
     "hide_rapido_expand_link_map" : {
       "Everything" : false,
       "CentralIndex" : false,
       "Ebsco" : false,
       "Research" : false,
       "CourseReserves" : false,
       "LibraryCatalog" : false
     },
     "subjects_alphabetical_sort_fullDisplay" : false,
     "Activate Captcha [Y/N]" : "Y",
     "Public Captcha Key" : "6Lcd7EIpAAAAAJGstxCc4gr-I-gXlpReWj5dHh2U",
     "async_brief_result_delivery" : true,
     "display_holdings_without_waiting" : false,
     "enable_direct_linking_in_record_full_view" : false,
     "hide_rapido_offers_tiles" : false,
     "rapido_hide_section_when_user_not_logged_in" : false,
     "rapido_hide_get_it_user_groups" : { },
     "default_user_search_history_off" : false,
     "equals_search_operator_hypertext_linking_enabled" : true,
     "equals_search_operator_hypertext_linking_enabled_title_field" : true,
     "equals_search_operator_hypertext_linking_enabled_author_field" : true,
     "equals_search_operator_hypertext_linking_enabled_subject_field" : true,
     "allow_start_with_for_call_number" : false,
     "allow_activity_on_transferred_finesfees" : false,
     "display_person_info_card" : false,
     "enable_person_entity_autocomplete" : false,
     "person_entity_autocomplete_server_url" : "https://api.summon.serialssolutions.com/eautocomplete/person",
     "primoVE_remove_duplicate_records_in_virtual_browse" : false,
     "rapido_show_physical_journal_offer" : false,
     "direct_login_transfer_all_parameters" : false,
     "default_sort_newspaper_by_date_newest" : false,
     "primo_ve_enable_browse_search_paging" : true,
     "alphabetical_sort_pickup_inst_lib" : false,
     "primoVE_my_account_number_of_requests" : "200",
     "display_location_level_in_getIt_single_location" : false,
     "nde_number_of_services_to_display_view_it" : "3",
     "exhibitions_creator" : false,
     "display_sms_wanted" : false,
     "auto_switch_quicklinks" : false,
     "request_default_format" : "PHYSICAL",
     "request_it_enabled" : false
   },
   "mapping-tables" : {
     "Citation Linker Definitions" : [ {
       "target" : "Yes",
       "source1" : "book",
       "source2" : "date",
       "source3" : "default",
       "source4" : "23"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "atitle",
       "source3" : "default",
       "source4" : "1"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "jtitle",
       "source3" : "default",
       "source4" : "2"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "date",
       "source3" : "default",
       "source4" : "3"
     }, {
       "target" : "Yes",
       "source1" : "book",
       "source2" : "volume",
       "source3" : "default",
       "source4" : "24"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "volume",
       "source3" : "default",
       "source4" : "4"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "issue",
       "source3" : "default",
       "source4" : "5"
     }, {
       "target" : "Yes",
       "source1" : "book",
       "source2" : "part",
       "source3" : "default",
       "source4" : "25"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "spage",
       "source3" : "default",
       "source4" : "6"
     }, {
       "target" : "Yes",
       "source1" : "book",
       "source2" : "isbn",
       "source3" : "default",
       "source4" : "26"
     }, {
       "target" : "Yes",
       "source1" : "book",
       "source2" : "aulast",
       "source3" : "default",
       "source4" : "27"
     }, {
       "target" : "Yes",
       "source1" : "book",
       "source2" : "aufirst",
       "source3" : "default",
       "source4" : "28"
     }, {
       "target" : "Yes",
       "source1" : "book",
       "source2" : "auinit",
       "source3" : "default",
       "source4" : "29"
     }, {
       "target" : "Yes",
       "source1" : "book",
       "source2" : "publisher",
       "source3" : "default",
       "source4" : "30"
     }, {
       "target" : "Yes",
       "source1" : "book",
       "source2" : "pubdate",
       "source3" : "default",
       "source4" : "31"
     }, {
       "target" : "Yes",
       "source1" : "journal",
       "source2" : "jtitle",
       "source3" : "default",
       "source4" : "16"
     }, {
       "target" : "Yes",
       "source1" : "journal",
       "source2" : "date",
       "source3" : "default",
       "source4" : "17"
     }, {
       "target" : "Yes",
       "source1" : "journal",
       "source2" : "volume",
       "source3" : "default",
       "source4" : "18"
     }, {
       "target" : "Yes",
       "source1" : "journal",
       "source2" : "issue",
       "source3" : "default",
       "source4" : "19"
     }, {
       "target" : "Yes",
       "source1" : "journal",
       "source2" : "issn",
       "source3" : "default",
       "source4" : "20"
     }, {
       "target" : "Yes",
       "source1" : "journal",
       "source2" : "doi",
       "source3" : "default",
       "source4" : "21"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "epage",
       "source3" : "default",
       "source4" : "7"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "issn",
       "source3" : "default",
       "source4" : "8"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "doi",
       "source3" : "default",
       "source4" : "9"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "pmid",
       "source3" : "default",
       "source4" : "10"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "aulast",
       "source3" : "default",
       "source4" : "11"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "aufirst",
       "source3" : "default",
       "source4" : "12"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "auinit",
       "source3" : "default",
       "source4" : "13"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "publisher",
       "source3" : "default",
       "source4" : "14"
     }, {
       "target" : "Yes",
       "source1" : "article",
       "source2" : "pubdate",
       "source3" : "default",
       "source4" : "15"
     }, {
       "target" : "Yes",
       "source1" : "book",
       "source2" : "btitle",
       "source3" : "default",
       "source4" : "22"
     } ],
     "Request (Hold and Booking) Optional Parameters" : [ {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "comment",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "materialType",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "notNeedAfter",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "termsOfUse",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "checkAvailiability",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "calculateQueueButton",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "chapterArticleTitle",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "chapterArticleAuthor",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "startPage",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "endPage",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "volume",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "issue",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "part",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "publicationDate",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "manualDescription",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "genericCheckBox",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "formDescription",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "addressLine1",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "addressLine2",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "addressLine3",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "addressLine4",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "city",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "stateProvince",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "postalCode",
       "source5" : "false"
     } ],
     "Prima Direct Login To Other Institutions" : [ ],
     "Library Level List" : [ {
       "target" : "Y",
       "source1" : "Group The Locations Under Get It By The Library Name"
     } ],
     "Personalize Your Results Disciplines Fields" : [ {
       "target" : "agriculture_forestry",
       "source1" : "default"
     }, {
       "target" : "anthropology",
       "source1" : "default",
       "source2" : "social_sciences"
     }, {
       "target" : "arts_humanities",
       "source1" : "default"
     }, {
       "target" : "biology",
       "source1" : "default",
       "source2" : "sciences"
     }, {
       "target" : "business_economics",
       "source1" : "default"
     }, {
       "target" : "chemistry",
       "source1" : "default",
       "source2" : "sciences"
     }, {
       "target" : "computer_science",
       "source1" : "default",
       "source2" : "engineering"
     }, {
       "target" : "geography",
       "source1" : "default",
       "source2" : "social_sciences"
     }, {
       "target" : "earth_sciences",
       "source1" : "default",
       "source2" : "sciences"
     }, {
       "target" : "education",
       "source1" : "default",
       "source2" : "social_sciences"
     }, {
       "target" : "engineering",
       "source1" : "default"
     }, {
       "target" : "languages_literature",
       "source1" : "default",
       "source2" : "arts_humanities"
     }, {
       "target" : "law",
       "source1" : "default"
     }, {
       "target" : "library_information_science",
       "source1" : "default"
     }, {
       "target" : "mathematics",
       "source1" : "default",
       "source2" : "sciences"
     }, {
       "target" : "medicine",
       "source1" : "default"
     }, {
       "target" : "nursing",
       "source1" : "default"
     }, {
       "target" : "pharmacy_therapeutics_pharmacology",
       "source1" : "default",
       "source2" : "medicine"
     }, {
       "target" : "philosophy_religion",
       "source1" : "default",
       "source2" : "arts_humanities"
     }, {
       "target" : "physics",
       "source1" : "default"
     }, {
       "target" : "political_sciences",
       "source1" : "default",
       "source2" : "social_sciences"
     }, {
       "target" : "psychology",
       "source1" : "default"
     }, {
       "target" : "public_health",
       "source1" : "default",
       "source2" : "social_sciences"
     }, {
       "target" : "sciences",
       "source1" : "default"
     }, {
       "target" : "social_sciences",
       "source1" : "default"
     }, {
       "target" : "sociology",
       "source1" : "default",
       "source2" : "social_sciences"
     }, {
       "target" : "veterinary_medicine",
       "source1" : "default"
     }, {
       "target" : "diet_clinical_nutrition",
       "source1" : "default",
       "source2" : "medicine"
     }, {
       "target" : "history_archaeology",
       "source1" : "default",
       "source2" : "arts_humanities"
     }, {
       "target" : "journalism_communications",
       "source1" : "default",
       "source2" : "social_sciences"
     }, {
       "target" : "materials_science",
       "source1" : "default",
       "source2" : "engineering"
     }, {
       "target" : "statistics",
       "source1" : "default"
     } ],
     "Personal Setting Fields" : [ {
       "target" : "sms_authorized",
       "source1" : "contact.sms_authorized",
       "source2" : "16",
       "source3" : "default"
     }, {
       "target" : "mail_attachement",
       "source1" : "contact.mail_attachment",
       "source2" : "18",
       "source3" : "default"
     }, {
       "target" : "pincode",
       "source1" : "contact.pincode",
       "source2" : "20",
       "source3" : "default"
     }, {
       "target" : "old_password",
       "source1" : "contact.oldPassword",
       "source2" : "21",
       "source3" : "default"
     }, {
       "target" : "new_password",
       "source1" : "contact.newPassword",
       "source2" : "22",
       "source3" : "default"
     }, {
       "target" : "my_email",
       "source1" : "contact.my_email",
       "source2" : "23",
       "source3" : "default"
     }, {
       "target" : "sms_number",
       "source1" : "contact.sms_number",
       "source2" : "24",
       "source3" : "default"
     }, {
       "target" : "country",
       "source1" : "contact.country",
       "source2" : "27",
       "source3" : "default"
     }, {
       "target" : "address_2",
       "source1" : "contact.address_2",
       "source2" : "2",
       "source3" : "default"
     }, {
       "target" : "address_3",
       "source1" : "contact.address_3",
       "source2" : "3",
       "source3" : "default"
     }, {
       "target" : "address_4",
       "source1" : "contact.address_4",
       "source2" : "4",
       "source3" : "default"
     }, {
       "target" : "address_valid_from",
       "source1" : "contact.address_valid_from",
       "source2" : "9",
       "source3" : "default"
     }, {
       "target" : "address_5",
       "source1" : "contact.address_5",
       "source2" : "5",
       "source3" : "default"
     }, {
       "target" : "address_valid_to",
       "source1" : "contact.address_valid_to",
       "source2" : "10",
       "source3" : "default"
     }, {
       "target" : "city",
       "source1" : "contact.city",
       "source2" : "6",
       "source3" : "default"
     }, {
       "target" : "telephone_1",
       "source1" : "contact.telephone_1",
       "source2" : "11",
       "source3" : "default"
     }, {
       "target" : "state",
       "source1" : "contact.state",
       "source2" : "7",
       "source3" : "default"
     }, {
       "target" : "telephone_2",
       "source1" : "contact.telephone_2",
       "source2" : "12",
       "source3" : "default"
     }, {
       "target" : "telephone_3",
       "source1" : "contact.telephone_3",
       "source2" : "13",
       "source3" : "default"
     }, {
       "target" : "telephone_4",
       "source1" : "contact.telephone_4",
       "source2" : "14",
       "source3" : "default"
     }, {
       "target" : "address_1",
       "source1" : "contact.address_1",
       "source2" : "1",
       "source3" : "default"
     }, {
       "target" : "zip",
       "source1" : "contact.zip",
       "source2" : "8",
       "source3" : "default"
     } ],
     "Photocopy Request Detailed Display" : [ {
       "target" : "request_type",
       "source1" : "request_type",
       "source2" : "1",
       "source3" : "default"
     }, {
       "target" : "title",
       "source1" : "title",
       "source2" : "2",
       "source3" : "default"
     }, {
       "target" : "author",
       "source1" : "author",
       "source2" : "3",
       "source3" : "default"
     }, {
       "target" : "year",
       "source1" : "year",
       "source2" : "4",
       "source3" : "default"
     }, {
       "target" : "request_title",
       "source1" : "request_title",
       "source2" : "5",
       "source3" : "default"
     }, {
       "target" : "request_author",
       "source1" : "request_author",
       "source2" : "6",
       "source3" : "default"
     }, {
       "target" : "request_pages",
       "source1" : "request_pages",
       "source2" : "7",
       "source3" : "default"
     }, {
       "target" : "request_status",
       "source1" : "request_status",
       "source2" : "8",
       "source3" : "default"
     }, {
       "target" : "pickup_location_name",
       "source1" : "pickup_location_name",
       "source2" : "9",
       "source3" : "default"
     }, {
       "target" : "item_description",
       "source1" : "item_description",
       "source2" : "10",
       "source3" : "default"
     }, {
       "target" : "main_location_name",
       "source1" : "main_location_name",
       "source2" : "12",
       "source3" : "default"
     }, {
       "target" : "call_number",
       "source1" : "call_number",
       "source2" : "13",
       "source3" : "default"
     }, {
       "target" : "call_number_2",
       "source1" : "call_number_2",
       "source2" : "14",
       "source3" : "default"
     }, {
       "target" : "parton_note_1",
       "source1" : "parton_note_1",
       "source2" : "15",
       "source3" : "default"
     }, {
       "target" : "parton_note_2",
       "source1" : "parton_note_2",
       "source2" : "16",
       "source3" : "default"
     }, {
       "target" : "request_creation_date",
       "source1" : "request_creation_date",
       "source2" : "17",
       "source3" : "default"
     }, {
       "target" : "requester_name",
       "source1" : "requester_name",
       "source2" : "18",
       "source3" : "default"
     }, {
       "target" : "add_info",
       "source1" : "add_info",
       "source2" : "19",
       "source3" : "default"
     } ],
     "Call Slip Optional Request Parameters" : [ {
       "target" : "No",
       "source1" : "default",
       "source2" : "patron_note_1"
     } ],
     "Requests Brief Display" : [ {
       "target" : "&nbsp",
       "source1" : "default",
       "source2" : "requests.brief.1",
       "source3" : "author"
     }, {
       "target" : "&nbsp",
       "source1" : "default",
       "source2" : "requests.brief.2",
       "source3" : "pickuplocationname"
     }, {
       "target" : "&nbsp",
       "source1" : "default",
       "source2" : "requests.brief.loan_period",
       "source3" : "sessionperiod"
     }, {
       "target" : "&nbsp",
       "source1" : "default",
       "source2" : "requests.brief.maximum_renewal_period",
       "source3" : "maximumrenewalperiod"
     }, {
       "target" : "&nbsp",
       "source1" : "default",
       "source2" : "requests.brief.remaining_renewal_period",
       "source3" : "remainingrenewalperiod"
     } ],
     "My Account Menu Configuration - OvP" : [ {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "myaccount1",
       "source3" : "loans"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "myaccount2",
       "source3" : "requests"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "myaccount3",
       "source3" : "fines"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "myaccount4",
       "source3" : "blocks"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "myaccount5",
       "source3" : "personal_settings"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "myaccount6",
       "source3" : "deposits"
     } ],
     "Report a Problem" : [ {
       "target" : "true",
       "source1" : "TRAINING_1_INST:All",
       "source2" : "Activate widget"
     }, {
       "target" : "1",
       "source1" : "TRAINING_1_INST:All",
       "source2" : "Number of categories"
     }, {
       "target" : "",
       "source1" : "TRAINING_1_INST:All",
       "source2" : "Email address"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:All",
       "source2" : "Form email address mandatory"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:All",
       "source2" : "Form description mandatory"
     } ],
     "Resource Recommender Config" : [ {
       "target" : "priority",
       "source1" : "0",
       "source2" : "database"
     }, {
       "target" : "priority",
       "source1" : "1",
       "source2" : "library_guide"
     }, {
       "target" : "priority",
       "source1" : "2",
       "source2" : "website"
     }, {
       "target" : "priority",
       "source1" : "3",
       "source2" : "person"
     }, {
       "target" : "priority",
       "source1" : "4",
       "source2" : "library_information"
     }, {
       "target" : "priority",
       "source1" : "5",
       "source2" : "custom1"
     }, {
       "target" : "priority",
       "source1" : "6",
       "source2" : "custom2"
     }, {
       "target" : "priority",
       "source1" : "7",
       "source2" : "custom3"
     }, {
       "target" : "priority",
       "source1" : "8",
       "source2" : "banner"
     }, {
       "target" : "enable",
       "source1" : "enable",
       "source2" : "false"
     } ],
     "Alma ViewIt Config" : [ {
       "target" : "electronic_services_before_digital",
       "source1" : "true"
     } ],
     "My Account Links" : [ ],
     "sort_fields_config" : [ {
       "target" : "screator",
       "source1" : "ASC",
       "source2" : "author"
     }, {
       "target" : "scdate",
       "source1" : "DESC",
       "source2" : "date"
     }, {
       "target" : "popularity",
       "source1" : "DESC",
       "source2" : "popularity"
     }, {
       "target" : "stitle",
       "source1" : "ASC",
       "source2" : "title"
     } ],
     "Institution Properties" : [ {
       "target" : "false",
       "source1" : "display_actions_personal_settings"
     }, {
       "target" : "false",
       "source1" : "display_user_settings"
     }, {
       "target" : "N",
       "source1" : "Save Users Search History"
     }, {
       "target" : "true",
       "source1" : "expanded_db_search"
     }, {
       "target" : "client",
       "source1" : "citeproc_engine"
     } ],
     "View Properties" : [ {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "enable_qr"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "enable_recent_scopes"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "enable_saveEshelf_message"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "enable_barcode_search"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "enable_resource_type_filter_bar"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "use_classic_email_template"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "focus_on_search_input"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "allow_direct_login_from_other_institutions"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "display_CDI_secondary_RT"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "enable_highlight_the_record_you_came_from"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "use_normalized_cdi_subjects"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "enable_qr"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "enable_recent_scopes"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "enable_saveEshelf_message"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "enable_barcode_search"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "enable_resource_type_filter_bar"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "use_classic_email_template"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "focus_on_search_input"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "allow_direct_login_from_other_institutions"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "display_CDI_secondary_RT"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "use_normalized_cdi_subjects"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "enable_highlight_the_record_you_came_from"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "nde_display_summary_field"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "export_all_records"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "nde_display_fields_table_is_customized"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "nde_actions_table_is_customized"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "nde_share_actions_table_is_customized"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "nde_export_actions_table_is_customized"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "nde_show_times_cited"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "nde_display_all_requests_in_expand_mode"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto2",
       "source2" : "nde_full_record_services_table_is_customized"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "nde_show_times_cited"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "export_all_records"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "nde_display_snippet"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "nde_display_all_requests_in_expand_mode"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "nde_full_record_services_table_is_customized"
     }, {
       "target" : "true",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "nde_display_summary_field"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "nde_display_fields_table_is_customized"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "nde_actions_table_is_customized"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "nde_share_actions_table_is_customized"
     }, {
       "target" : "false",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "nde_export_actions_table_is_customized"
     } ],
     "Resource Sharing Request Parameters" : [ {
       "target" : "No",
       "source1" : "both",
       "source2" : "specificEdition",
       "source3" : "book",
       "source4" : "6",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "edition",
       "source3" : "book",
       "source4" : "7",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "isbn",
       "source3" : "book",
       "source4" : "8",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "lccn",
       "source3" : "book",
       "source4" : "9",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "oclcNumber",
       "source3" : "book",
       "source4" : "10",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "publisher",
       "source3" : "book",
       "source4" : "11",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "publicationDate",
       "source3" : "book",
       "source4" : "12",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "placeOfPublication",
       "source3" : "book",
       "source4" : "13",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "volume",
       "source3" : "book",
       "source4" : "14",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "part",
       "source3" : "book",
       "source4" : "15",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "chapter",
       "source3" : "book",
       "source4" : "16",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "source",
       "source3" : "book",
       "source4" : "17",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "seriesTitleNumber",
       "source3" : "book",
       "source4" : "18",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "pagesToPhotocopy",
       "source3" : "book",
       "source4" : "19",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "findArticleItemsDescriptions",
       "source3" : "article",
       "source4" : "0",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "articleTitle",
       "source3" : "article",
       "source4" : "1",
       "source5" : "Yes"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "journalTitle",
       "source3" : "article",
       "source4" : "2",
       "source5" : "Yes"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "author",
       "source3" : "article",
       "source4" : "3",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "authorInitials",
       "source3" : "article",
       "source4" : "4",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "additionalAuthor",
       "source3" : "article",
       "source4" : "5",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "issn",
       "source3" : "article",
       "source4" : "6",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "lccn",
       "source3" : "article",
       "source4" : "7",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "oclcNumber",
       "source3" : "article",
       "source4" : "8",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "doi",
       "source3" : "article",
       "source4" : "9",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "doiAutoFill",
       "source3" : "article",
       "source4" : "10",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "pmid",
       "source3" : "article",
       "source4" : "11",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "pmidAutoFill",
       "source3" : "article",
       "source4" : "12",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "publisher",
       "source3" : "article",
       "source4" : "13",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "placeOfPublication",
       "source3" : "article",
       "source4" : "14",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "publicationDate",
       "source3" : "article",
       "source4" : "15",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "journalVolume",
       "source3" : "article",
       "source4" : "16",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "issue",
       "source3" : "article",
       "source4" : "17",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "chapter",
       "source3" : "article",
       "source4" : "18",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "source",
       "source3" : "article",
       "source4" : "19",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "seriesTitleNumber",
       "source3" : "article",
       "source4" : "20",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "pagesToPhotocopy",
       "source3" : "article",
       "source4" : "21",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "startPage",
       "source3" : "article",
       "source4" : "22",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "endPage",
       "source3" : "article",
       "source4" : "23",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "format",
       "source3" : "delivery",
       "source4" : "1",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "requestedMedia",
       "source3" : "delivery",
       "source4" : "2",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "alternativeLocationAddress",
       "source3" : "delivery",
       "source4" : "3",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "line1",
       "source3" : "delivery",
       "source4" : "1",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "line2",
       "source3" : "delivery",
       "source4" : "2",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "line3",
       "source3" : "delivery",
       "source4" : "3",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "line4",
       "source3" : "delivery",
       "source4" : "4",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "alternativeLocationEmail",
       "source3" : "delivery",
       "source4" : "8",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "email",
       "source3" : "delivery",
       "source4" : "1",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "Yes",
       "source1" : "singleinst",
       "source2" : "pickupLocation",
       "source3" : "delivery",
       "source4" : "14",
       "source5" : "Yes",
       "source6" : " "
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "notNeedAfter",
       "source3" : "delivery",
       "source4" : "15",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "comment",
       "source3" : "delivery",
       "source4" : "16",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "maximumFee",
       "source3" : "delivery",
       "source4" : "17",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "levelOfService",
       "source3" : "delivery",
       "source4" : "18",
       "source5" : "Yes"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "copyrights",
       "source3" : "delivery",
       "source4" : "19",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "language",
       "source3" : "delivery",
       "source4" : "20",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "willingToPay",
       "source3" : "delivery",
       "source4" : "21",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "genericCheckBox",
       "source3" : "delivery",
       "source4" : "22",
       "source5" : "No",
       "source6" : " "
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "itemAvailability",
       "source3" : "book",
       "source4" : "1",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "findBookItemsDescriptions",
       "source3" : "book",
       "source4" : "1",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "owner",
       "source3" : "owner",
       "source4" : "1",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "specificChapterPages",
       "source3" : "chapter",
       "source4" : "1",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "citationType",
       "source3" : "type",
       "source4" : "1",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "formDescription",
       "source3" : "owner",
       "source4" : "1",
       "source5" : "No"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "title",
       "source3" : "book",
       "source4" : "2",
       "source5" : "Yes"
     }, {
       "target" : "Yes",
       "source1" : "both",
       "source2" : "author",
       "source3" : "book",
       "source4" : "3",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "authorInitials",
       "source3" : "book",
       "source4" : "4",
       "source5" : "No"
     }, {
       "target" : "No",
       "source1" : "both",
       "source2" : "additionalAuthor",
       "source3" : "book",
       "source4" : "5",
       "source5" : "No"
     } ],
     "Featured newspapers" : [ {
       "target" : "1553-8095",
       "source1" : "default",
       "source2" : "New York Times",
       "source3" : "Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, and more",
       "source4" : "1",
       "source5" : "1"
     }, {
       "target" : "0190-8286",
       "source1" : "default",
       "source2" : "1234",
       "source3" : "Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, and more",
       "source4" : "2",
       "source5" : "1"
     } ],
     "Nde Export Actions" : [ {
       "target" : "Print",
       "source1" : "1"
     }, {
       "target" : "RefWorks",
       "source1" : "2"
     }, {
       "target" : "EndNote",
       "source1" : "3"
     }, {
       "target" : "EasyBib",
       "source1" : "4"
     }, {
       "target" : "RISPushTo",
       "source1" : "5"
     }, {
       "target" : "BibTeXPushTo",
       "source1" : "6"
     }, {
       "target" : "Mendeley",
       "source1" : "7"
     }, {
       "target" : "Excel",
       "source1" : "8"
     }, {
       "target" : "Leganto",
       "source1" : "9"
     } ],
     "Controlled Digital Lending Request Detailed Display" : [ {
       "target" : "request_type",
       "source1" : "request_type",
       "source2" : "1",
       "source3" : "default"
     }, {
       "target" : "author",
       "source1" : "author",
       "source2" : "2",
       "source3" : "default"
     }, {
       "target" : "title",
       "source1" : "title",
       "source2" : "3",
       "source3" : "default"
     }, {
       "target" : "year",
       "source1" : "year",
       "source2" : "4",
       "source3" : "default"
     }, {
       "target" : "request_status",
       "source1" : "request_status",
       "source2" : "5",
       "source3" : "default"
     }, {
       "target" : "cdl_start_date",
       "source1" : "cdl_start_date",
       "source2" : "6",
       "source3" : "default"
     }, {
       "target" : "cdl_start_hour",
       "source1" : "cdl_start_hour",
       "source2" : "7",
       "source3" : "default"
     }, {
       "target" : "cdl_end_date",
       "source1" : "cdl_end_date",
       "source2" : "8",
       "source3" : "default"
     }, {
       "target" : "cdl_end_hour",
       "source1" : "cdl_end_hour",
       "source2" : "9",
       "source3" : "default"
     }, {
       "target" : "pickup_location_name",
       "source1" : "pickup_location_name",
       "source2" : "10",
       "source3" : "default"
     }, {
       "target" : "return_location",
       "source1" : "return_location",
       "source2" : "11",
       "source3" : "default"
     }, {
       "target" : "delivery_method",
       "source1" : "delivery_method",
       "source2" : "12",
       "source3" : "default"
     }, {
       "target" : "requester_id",
       "source1" : "requester_id",
       "source2" : "15",
       "source3" : "default"
     }, {
       "target" : "patron_note_1",
       "source1" : "patron_note_1",
       "source2" : "16",
       "source3" : "default"
     }, {
       "target" : "patron_note_2",
       "source1" : "patron_note_2",
       "source2" : "17",
       "source3" : "default"
     }, {
       "target" : "item_description",
       "source1" : "item_description",
       "source2" : "19",
       "source3" : "default"
     }, {
       "target" : "main_location_name",
       "source1" : "main_location_name",
       "source2" : "20",
       "source3" : "default"
     }, {
       "target" : "secondary_location_name",
       "source1" : "secondary_location_name",
       "source2" : "23",
       "source3" : "default"
     }, {
       "target" : "call_number",
       "source1" : "call_number",
       "source2" : "24",
       "source3" : "default"
     }, {
       "target" : "call_number_2",
       "source1" : "call_number_2",
       "source2" : "25",
       "source3" : "default"
     }, {
       "target" : "item_category_name",
       "source1" : "item_category_name",
       "source2" : "27",
       "source3" : "default"
     }, {
       "target" : "item_status_name",
       "source1" : "item_status_name",
       "source2" : "28",
       "source3" : "default"
     }, {
       "target" : "group_id",
       "source1" : "group_id",
       "source2" : "31",
       "source3" : "default"
     }, {
       "target" : "loan_period",
       "source1" : "loan_period",
       "source2" : "35",
       "source3" : "default"
     }, {
       "target" : "grace_period",
       "source1" : "grace_period",
       "source2" : "36",
       "source3" : "default"
     }, {
       "target" : "request_id",
       "source1" : "request_id",
       "source2" : "38",
       "source3" : "default"
     }, {
       "target" : "request_date",
       "source1" : "request_date",
       "source2" : "39",
       "source3" : "default"
     }, {
       "target" : "maximum_renewal_period",
       "source1" : "maximum_renewal_period",
       "source2" : "40",
       "source3" : "default"
     }, {
       "target" : "remaining_renewal_period",
       "source1" : "remaining_renewal_period",
       "source2" : "41",
       "source3" : "default"
     } ],
     "Digitization Optional Request Parameters" : [ {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "partial",
       "source3" : "True",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "chapterArticleTitle",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "chapterArticleAuthor",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "startPage",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "endPage",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "fullChapter",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "comment",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "notNeededAfter",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "copyrightDeclaration",
       "source5" : "true"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "generalUseLabel",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "calculateQueueButton",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "volume",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "issue",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "part",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "publicationDate",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "manualDescription",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "genericCheckBox",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "formDescription",
       "source5" : "false"
     } ],
     "Purchase Request Optional Parameters" : [ {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "publication_year",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "place_of_publication",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "volume",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "requesterNotes",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "materialType",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "purchaseRequestLibrary",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "genericCheckBox",
       "source5" : "false"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "formDescription",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "author",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "edition",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "isbn",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "issn",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "lccNumber",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "oclcNumber",
       "source5" : "false"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "publisher",
       "source5" : "false"
     } ],
     "Share Action Configuration" : [ {
       "target" : "WhatsApp",
       "source1" : "1"
     }, {
       "target" : "Facebook",
       "source1" : "2"
     }, {
       "target" : "Twitter",
       "source1" : "3"
     }, {
       "target" : "LinkedIn",
       "source1" : "4"
     } ],
     "NDE Quick Filters" : [ {
       "target" : "facets.facet.tlevel.online_resources",
       "source1" : "1"
     }, {
       "target" : "facets.facet.tlevel.available_p",
       "source1" : "2"
     }, {
       "target" : "facets.facet.tlevel.peer_reviewed",
       "source1" : "3"
     } ],
     "Loans Detailed Display" : [ {
       "target" : "year",
       "source1" : "year",
       "source2" : "1",
       "source3" : "default"
     }, {
       "target" : "due_date",
       "source1" : "due_date",
       "source2" : "2",
       "source3" : "default"
     }, {
       "target" : "due_hour",
       "source1" : "due_hour",
       "source2" : "3",
       "source3" : "default"
     }, {
       "target" : "fine",
       "source1" : "fine",
       "source2" : "4",
       "source3" : "default"
     }, {
       "target" : "main_location_name",
       "source1" : "main_location_name",
       "source2" : "5",
       "source3" : "default"
     }, {
       "target" : "secondary_location_name",
       "source1" : "secondary_location_name",
       "source2" : "7",
       "source3" : "default"
     }, {
       "target" : "call_number",
       "source1" : "call_number",
       "source2" : "9",
       "source3" : "default"
     }, {
       "target" : "call_number_2",
       "source1" : "call_number_2",
       "source2" : "10",
       "source3" : "default"
     }, {
       "target" : "loan_date",
       "source1" : "loan_date",
       "source2" : "11",
       "source3" : "default"
     }, {
       "target" : "loan_status",
       "source1" : "loan_status",
       "source2" : "12",
       "source3" : "default"
     }, {
       "target" : "item_status_name",
       "source1" : "item_status_name",
       "source2" : "13",
       "source3" : "default"
     }, {
       "target" : "item_category_name",
       "source1" : "item_category_name",
       "source2" : "15",
       "source3" : "default"
     }, {
       "target" : "ils_institution_name",
       "source1" : "ils_institution_name",
       "source2" : "17",
       "source3" : "default"
     }, {
       "target" : "item_barcode",
       "source1" : "item_barcode",
       "source2" : "18",
       "source3" : "default"
     }, {
       "target" : "max_renew_date",
       "source1" : "max_renew_date",
       "source2" : "19",
       "source3" : "default"
     }, {
       "target" : "item_description",
       "source1" : "Description",
       "source2" : "20",
       "source3" : "default"
     }, {
       "target" : "item_id",
       "source1" : "item_id",
       "source2" : "21",
       "source3" : "default"
     }, {
       "target" : "last_renew_date",
       "source1" : "last_renew_date",
       "source2" : "22",
       "source3" : "default"
     }, {
       "target" : "no_overdue_notices",
       "source1" : "no_overdue_notices",
       "source2" : "23",
       "source3" : "default"
     }, {
       "target" : "no_renewal",
       "source1" : "no_renewal",
       "source2" : "24",
       "source3" : "default"
     }, {
       "target" : "proxy_id",
       "source1" : "proxy_id",
       "source2" : "25",
       "source3" : "default"
     } ],
     "Actions List" : [ {
       "target" : "default",
       "source1" : "e-shelf",
       "source2" : "0",
       "source3" : "0"
     }, {
       "target" : "default",
       "source1" : "E-mail",
       "source2" : "1",
       "source3" : "1"
     }, {
       "target" : "default",
       "source1" : "Permalink",
       "source2" : "2",
       "source3" : "2"
     }, {
       "target" : "default",
       "source1" : "Citation",
       "source2" : "3"
     }, {
       "target" : "default",
       "source1" : "Print",
       "source2" : "4"
     }, {
       "target" : "default",
       "source1" : "RefWorks",
       "source2" : "5"
     }, {
       "target" : "default",
       "source1" : "EndNote",
       "source2" : "6"
     }, {
       "target" : "default",
       "source1" : "EasyBib",
       "source2" : "7"
     }, {
       "target" : "default",
       "source1" : "RISPushTo",
       "source2" : "8"
     }, {
       "target" : "default",
       "source1" : "BibTeXPushTo",
       "source2" : "9"
     }, {
       "target" : "default",
       "source1" : "Share",
       "source2" : "10"
     }, {
       "target" : "default",
       "source1" : "QR",
       "source2" : "11"
     }, {
       "target" : "default",
       "source1" : "Leganto",
       "source2" : "12"
     }, {
       "target" : "default",
       "source1" : "Mendeley",
       "source2" : "13"
     }, {
       "target" : "default",
       "source1" : "Excel",
       "source2" : "14"
     } ],
     "Recent Searches Configuration" : [ {
       "target" : "TRAINING_1_INST",
       "source1" : "N"
     } ],
     "Hypertext Linking Definitions" : [ {
       "target" : "creator",
       "source1" : "creator",
       "source2" : "exact",
       "source3" : "ANY"
     }, {
       "target" : "contributor",
       "source1" : "creator",
       "source2" : "exact",
       "source3" : "ANY"
     }, {
       "target" : "subject",
       "source1" : "sub",
       "source2" : "exact",
       "source3" : "ANY"
     }, {
       "target" : "series",
       "source1" : "title",
       "source2" : "exact",
       "source3" : "L"
     }, {
       "target" : "relation",
       "source1" : "title",
       "source2" : "exact",
       "source3" : "L"
     }, {
       "target" : "ispartof",
       "source1" : "title",
       "source2" : "exact",
       "source3" : "L"
     }, {
       "target" : "mesh",
       "source1" : "mesh",
       "source2" : "exact",
       "source3" : "ANY"
     }, {
       "target" : "boundwith",
       "source1" : "title",
       "source2" : "exact",
       "source3" : "L"
     }, {
       "target" : "grantURL",
       "source1" : "title",
       "source2" : "exact",
       "source3" : "ANY"
     } ],
     "Browse Lists" : [ {
       "target" : "Yes",
       "source1" : "author",
       "source2" : "title",
       "source4" : "default",
       "source5" : "1",
       "source6" : "true"
     }, {
       "target" : "Yes",
       "source1" : "title",
       "source2" : "author",
       "source4" : "default",
       "source5" : "2",
       "source6" : "false"
     }, {
       "target" : "No",
       "source1" : "series",
       "source2" : "title",
       "source4" : "default",
       "source5" : "3",
       "source6" : "false"
     }, {
       "target" : "No",
       "source1" : "callnumber.0",
       "source4" : "default",
       "source5" : "4",
       "source6" : "false"
     }, {
       "target" : "No",
       "source1" : "callnumber.1",
       "source4" : "default",
       "source5" : "5",
       "source6" : "false"
     }, {
       "target" : "No",
       "source1" : "callnumber.2",
       "source4" : "default",
       "source5" : "6",
       "source6" : "false"
     }, {
       "target" : "No",
       "source1" : "callnumber.3",
       "source4" : "default",
       "source5" : "7",
       "source6" : "false"
     }, {
       "target" : "No",
       "source1" : "callnumber.4",
       "source4" : "default",
       "source5" : "8",
       "source6" : "false"
     }, {
       "target" : "No",
       "source1" : "callnumber.UDC",
       "source4" : "default",
       "source5" : "9",
       "source6" : "false"
     }, {
       "target" : "No",
       "source1" : "callnumber",
       "source4" : "default",
       "source5" : "10",
       "source6" : "false"
     }, {
       "target" : "No",
       "source1" : "subject.1",
       "source2" : "author",
       "source4" : "default",
       "source5" : "11",
       "source6" : "true"
     }, {
       "target" : "No",
       "source1" : "subject.2",
       "source2" : "author",
       "source4" : "default",
       "source5" : "12",
       "source6" : "true"
     }, {
       "target" : "No",
       "source1" : "subject.3",
       "source2" : "author",
       "source4" : "default",
       "source5" : "13",
       "source6" : "true"
     }, {
       "target" : "No",
       "source1" : "subject.4",
       "source2" : "author",
       "source4" : "default",
       "source5" : "14",
       "source6" : "true"
     }, {
       "target" : "No",
       "source1" : "subject.5",
       "source2" : "author",
       "source4" : "default",
       "source5" : "15",
       "source6" : "true"
     } ],
     "Holdings Display In Locations List" : [ {
       "target" : "holdings_fields_display_in_locations_list_view",
       "source2" : "false"
     } ],
     "Nde otb Actions List" : [ {
       "target" : "default",
       "source1" : "Share Actions",
       "source2" : "0"
     }, {
       "target" : "default",
       "source1" : "Citation",
       "source2" : "1"
     }, {
       "target" : "default",
       "source1" : "Export Actions",
       "source2" : "2"
     }, {
       "target" : "default",
       "source1" : "Save to Favorites",
       "source2" : "3"
     } ],
     "Loans Brief Display" : [ {
       "target" : "&nbsp",
       "source1" : "default",
       "source2" : "loans.brief.1",
       "source3" : "author",
       "source4" : "Select Value",
       "source5" : "Select Value"
     }, {
       "target" : "&nbsp",
       "source1" : "default",
       "source2" : "loans.brief.2",
       "source3" : "main_location_name",
       "source4" : "secondary_location_name",
       "source5" : "call_number"
     } ],
     "ILL Optional Request Parameters" : [ {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "allowed_media"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "service_level"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "delivery_method"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "last_interest_date"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "request_author"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "request_title"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "request_volume"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "request_pages"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "patron_note_1"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "language"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "request_month"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "request_day"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "request_issue"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "willing_to_pay"
     }, {
       "target" : "Yes",
       "source1" : "default",
       "source2" : "send_directly"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "copyright"
     } ],
     "Voice Languages" : [ {
       "target" : "Afrikaans",
       "source1" : " ",
       "source2" : "af"
     }, {
       "target" : "Arabic",
       "source1" : " ",
       "source2" : "ar-JO"
     }, {
       "target" : "basque",
       "source1" : "es_EU",
       "source2" : "eu"
     }, {
       "target" : "Bulgarian",
       "source1" : " ",
       "source2" : "bg"
     }, {
       "target" : "Català",
       "source1" : "ca_ES",
       "source2" : "ca"
     }, {
       "target" : "Chinese",
       "source1" : "zh_TW",
       "source2" : "zh-TW"
     }, {
       "target" : "Czech",
       "source1" : " ",
       "source2" : "cs"
     }, {
       "target" : "Dansk",
       "source1" : "da_DK"
     }, {
       "target" : "Deutsch",
       "source1" : "de_DE",
       "source2" : "de-DE"
     }, {
       "target" : "Dutch",
       "source1" : " ",
       "source2" : "nl-NL"
     }, {
       "target" : "English",
       "source1" : "en_US",
       "source2" : "en-US"
     }, {
       "target" : "English (Australia)",
       "source1" : " ",
       "source2" : "en-AU"
     }, {
       "target" : "English (Canada)",
       "source1" : " ",
       "source2" : "en-CA"
     }, {
       "target" : "English (India)",
       "source1" : " ",
       "source2" : "en-IN"
     }, {
       "target" : "English (South Africa)",
       "source1" : " ",
       "source2" : "en-ZA"
     }, {
       "target" : "English(UK)",
       "source1" : " ",
       "source2" : "en-GB"
     }, {
       "target" : "Finnish",
       "source1" : " ",
       "source2" : "fi"
     }, {
       "target" : "Français",
       "source1" : "fr_FR",
       "source2" : "fr-FR"
     }, {
       "target" : "Galician",
       "source1" : "gl_ES",
       "source2" : "gl"
     }, {
       "target" : "Greek",
       "source1" : " ",
       "source2" : "el-GR"
     }, {
       "target" : "Hebrew",
       "source1" : "iw_IL",
       "source2" : "he"
     }, {
       "target" : "Iceland",
       "source1" : "is_IS",
       "source2" : "is"
     }, {
       "target" : "Indonesian",
       "source1" : " ",
       "source2" : "id"
     }, {
       "target" : "italiano",
       "source1" : "it_IT",
       "source2" : "it-IT"
     }, {
       "target" : "Japanese",
       "source1" : " ",
       "source2" : "ja"
     }, {
       "target" : "Korean",
       "source1" : "ko_KR",
       "source2" : "ko"
     }, {
       "target" : "Latin Spanish",
       "source1" : "es_CL",
       "source2" : "la"
     }, {
       "target" : "Magyar",
       "source1" : "hu_HU",
       "source2" : "ta"
     }, {
       "target" : "Melayu",
       "source1" : "ms_MY",
       "source2" : "ms-MY"
     }, {
       "target" : "Norse",
       "source1" : "no_NO",
       "source2" : "no-NO"
     }, {
       "target" : "Polski",
       "source1" : "pl_PL",
       "source2" : "pl"
     }, {
       "target" : "Portuguese",
       "source1" : " ",
       "source2" : "pt-PT"
     }, {
       "target" : "Portuguese (Brasil)",
       "source1" : " ",
       "source2" : "pt-BR"
     }, {
       "target" : "Romanian",
       "source1" : " ",
       "source2" : "ro-RO"
     }, {
       "target" : "Russian",
       "source1" : "ru_RU",
       "source2" : "ru"
     }, {
       "target" : "Serbian",
       "source1" : " ",
       "source2" : "sr-SP"
     }, {
       "target" : "Simplified Hong Kong",
       "source1" : " ",
       "source2" : "zh-HK"
     }, {
       "target" : "Slovak",
       "source1" : " ",
       "source2" : "sk"
     }, {
       "target" : "Spanish",
       "source1" : "es_ES",
       "source2" : "es-ES"
     }, {
       "target" : "Spanish (Argentina)",
       "source1" : " ",
       "source2" : "es-AR"
     }, {
       "target" : "Spanish (Chile)",
       "source1" : " ",
       "source2" : "es-CL"
     }, {
       "target" : "Spanish (Mexico)",
       "source1" : " ",
       "source2" : "es-MX"
     }, {
       "target" : "Svenska",
       "source1" : "sv_SE",
       "source2" : "sv-SE"
     }, {
       "target" : "Turkish",
       "source1" : "tr_TR",
       "source2" : "tr"
     }, {
       "target" : "Welsh",
       "source1" : "cy_GB"
     }, {
       "target" : "Zulu",
       "source1" : " ",
       "source2" : "zu"
     }, {
       "target" : "česky",
       "source1" : "cs_CZ",
       "source2" : "cs"
     }, {
       "target" : "தமிழ்",
       "source1" : "ta_IN"
     }, {
       "target" : "华文",
       "source1" : "zh_CN",
       "source2" : "zh-CN"
     } ],
     "Bulk Definition" : [ {
       "target" : "100",
       "source1" : "OvP - Loans Paging"
     }, {
       "target" : "10",
       "source1" : "OvP - Items Paging"
     }, {
       "target" : "10",
       "source1" : "Reviews"
     } ],
     "Nde Share Actions" : [ {
       "target" : "QR",
       "source1" : "7"
     }, {
       "target" : "Email",
       "source1" : "1"
     }, {
       "target" : "Permalink",
       "source1" : "2"
     }, {
       "target" : "Whatsapp",
       "source1" : "3"
     }, {
       "target" : "Facebook",
       "source1" : "4"
     }, {
       "target" : "Twitter",
       "source1" : "5"
     }, {
       "target" : "LinkedIn",
       "source1" : "6"
     } ],
     "Items Brief Display" : [ {
       "target" : "&nbsp;",
       "source1" : "default",
       "source2" : "item.brief.1",
       "source3" : "itemstatusname",
       "source4" : "queue"
     }, {
       "target" : "&nbsp;",
       "source1" : "default",
       "source2" : "item.brief.2",
       "source3" : "itemcategoryname"
     }, {
       "target" : "&nbsp;",
       "source1" : "default",
       "source2" : "item.brief.3",
       "source3" : "itemdescription"
     }, {
       "target" : "&nbsp;",
       "source1" : "default",
       "source2" : "item.brief.4"
     } ],
     "Photocopy Optional Request Parameters" : [ {
       "target" : "No",
       "source1" : "default",
       "source2" : "request_author"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "request_title"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "patron_note_1"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "patron_note_2"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "add_info"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "requester_name"
     } ],
     "User Login Links" : [ {
       "source1" : "login.link1"
     }, {
       "source1" : "login.link2"
     }, {
       "source1" : "login.link3"
     }, {
       "source1" : "login.link4"
     } ],
     "Acquisition Request Detailed Display" : [ {
       "target" : "request_type",
       "source1" : "request_type",
       "source2" : "1",
       "source3" : "default"
     }, {
       "target" : "title",
       "source1" : "title",
       "source2" : "2",
       "source3" : "default"
     }, {
       "target" : "author",
       "source1" : "author",
       "source2" : "3",
       "source3" : "default"
     }, {
       "target" : "year",
       "source1" : "year",
       "source2" : "4",
       "source3" : "default"
     }, {
       "target" : "imprint",
       "source1" : "imprint",
       "source2" : "5",
       "source3" : "default"
     }, {
       "target" : "request_title",
       "source1" : "request_title",
       "source2" : "6",
       "source3" : "default"
     }, {
       "target" : "request_pages",
       "source1" : "request_pages",
       "source2" : "7",
       "source3" : "default"
     }, {
       "target" : "order_number",
       "source1" : "order_number",
       "source2" : "8",
       "source3" : "default"
     }, {
       "target" : "request_status",
       "source1" : "request_status",
       "source2" : "9",
       "source3" : "default"
     }, {
       "target" : "last_status_date",
       "source1" : "last_status_date",
       "source2" : "10",
       "source3" : "default"
     }, {
       "target" : "library_note",
       "source1" : "library_note",
       "source2" : "11",
       "source3" : "default"
     } ],
     "primo_central_institutions_unique_ids" : [ {
       "target" : "VOLCANO",
       "source1" : "01RAND.01RAND_INST.PPRD"
     } ],
     "Fines Detailed Display" : [ {
       "target" : "type",
       "source1" : "type",
       "source2" : "1",
       "source3" : "default"
     }, {
       "target" : "author",
       "source1" : "author",
       "source2" : "2",
       "source3" : "default"
     }, {
       "target" : "title",
       "source1" : "title",
       "source2" : "3",
       "source3" : "default"
     }, {
       "target" : "year",
       "source1" : "year",
       "source2" : "4",
       "source3" : "default"
     }, {
       "target" : "fine_status",
       "source1" : "fine_status",
       "source2" : "5",
       "source3" : "default"
     }, {
       "target" : "fine_description",
       "source1" : "fine_description",
       "source2" : "6",
       "source3" : "default"
     }, {
       "target" : "fine_sum",
       "source1" : "fine_sum",
       "source2" : "7",
       "source3" : "default"
     }, {
       "target" : "fine_date",
       "source1" : "fine_date",
       "source2" : "8",
       "source3" : "default"
     }, {
       "target" : "fine_main_location",
       "source1" : "fine_main_location",
       "source2" : "9",
       "source3" : "default"
     }, {
       "target" : "transferred",
       "source1" : "transferred",
       "source2" : "10",
       "source3" : "default"
     }, {
       "target" : "transfer_date",
       "source1" : "transfer_date",
       "source2" : "11",
       "source3" : "default"
     }, {
       "target" : "transfer_department",
       "source1" : "transfer_department",
       "source2" : "12",
       "source3" : "default"
     }, {
       "target" : "transfer_number",
       "source1" : "transfer_number",
       "source2" : "13",
       "source3" : "default"
     }, {
       "target" : "ils_institution_name",
       "source1" : "ils_institution_name",
       "source2" : "15",
       "source3" : "default"
     }, {
       "target" : "secondary_location_name",
       "source1" : "secondary_location_name",
       "source2" : "19",
       "source3" : "default"
     }, {
       "target" : "call_number",
       "source1" : "call_number",
       "source2" : "20",
       "source3" : "default"
     }, {
       "target" : "call_number_2",
       "source1" : "call_number_2",
       "source2" : "21",
       "source3" : "default"
     }, {
       "target" : "item_category_name",
       "source1" : "item_category_name",
       "source2" : "23",
       "source3" : "default"
     }, {
       "target" : "item_status_name",
       "source1" : "item_status_name",
       "source2" : "24",
       "source3" : "default"
     }, {
       "target" : "item_barcode",
       "source1" : "item_barcode",
       "source2" : "25",
       "source3" : "default"
     }, {
       "target" : "fine_id",
       "source1" : "fine_id",
       "source2" : "26",
       "source3" : "default"
     }, {
       "target" : "main_location_name",
       "source1" : "main_location_name",
       "source2" : "17",
       "source3" : "default"
     } ],
     "ILL Request Detailed Display" : [ {
       "target" : "request_type",
       "source1" : "request_type",
       "source2" : "1",
       "source3" : "default"
     }, {
       "target" : "title",
       "source1" : "title",
       "source2" : "2",
       "source3" : "default"
     }, {
       "target" : "author",
       "source1" : "author",
       "source2" : "3",
       "source3" : "default"
     }, {
       "target" : "year",
       "source1" : "year",
       "source2" : "4",
       "source3" : "default"
     }, {
       "target" : "title_imprint",
       "source1" : "title_imprint",
       "source2" : "5",
       "source3" : "default"
     }, {
       "target" : "media",
       "source1" : "media",
       "source2" : "6",
       "source3" : "default"
     }, {
       "target" : "request_title",
       "source1" : "request_title",
       "source2" : "7",
       "source3" : "default"
     }, {
       "target" : "request_author",
       "source1" : "request_author",
       "source2" : "8",
       "source3" : "default"
     }, {
       "target" : "request_add_data_1",
       "source1" : "request_add_data_1",
       "source2" : "9",
       "source3" : "default"
     }, {
       "target" : "request_add_data_2",
       "source1" : "request_add_data_2",
       "source2" : "10",
       "source3" : "default"
     }, {
       "target" : "request_add_data_3",
       "source1" : "request_add_data_3",
       "source2" : "11",
       "source3" : "default"
     }, {
       "target" : "request_add_data_4",
       "source1" : "request_add_data_4",
       "source2" : "12",
       "source3" : "default"
     }, {
       "target" : "request_add_data_5",
       "source1" : "request_add_data_5",
       "source2" : "13",
       "source3" : "default"
     }, {
       "target" : "request_status",
       "source1" : "request_status",
       "source2" : "14",
       "source3" : "default"
     }, {
       "target" : "suppliers_status",
       "source1" : "suppliers_status",
       "source2" : "15",
       "source3" : "default"
     }, {
       "target" : "update_date",
       "source1" : "update_date",
       "source2" : "16",
       "source3" : "default"
     }, {
       "target" : "pickup_location_name",
       "source1" : "pickup_location_name",
       "source2" : "17",
       "source3" : "default"
     }, {
       "target" : "preferred_pickup_location_name",
       "source1" : "preferred_pickup_location_name",
       "source2" : "18",
       "source3" : "default"
     }, {
       "target" : "patron_note_1",
       "source1" : "patron_note_1",
       "source2" : "19",
       "source3" : "default"
     }, {
       "target" : "staff_note",
       "source1" : "staff_note",
       "source2" : "20",
       "source3" : "default"
     }, {
       "target" : "last_interest_date",
       "source1" : "last_interest_date",
       "source2" : "21",
       "source3" : "default"
     } ],
     "Personal Details Configuration" : [ {
       "target" : "User Expiration Date",
       "source1" : "Display user expiration date in Personal Details"
     } ],
     "Prima Filter Bar Resource Types" : [ {
       "target" : "books",
       "source1" : "ALL",
       "source2" : "1"
     }, {
       "target" : "articles",
       "source1" : "ALL",
       "source2" : "2"
     }, {
       "target" : "journals",
       "source1" : "ALL",
       "source2" : "3"
     }, {
       "target" : "images",
       "source1" : "ALL",
       "source2" : "4"
     }, {
       "target" : "collections",
       "source1" : "ALL",
       "source2" : "5"
     }, {
       "target" : "videos",
       "source1" : "ALL",
       "source2" : "6"
     }, {
       "target" : "reports",
       "source1" : "ALL",
       "source2" : "7"
     } ],
     "Authority Search Scopes" : [ {
       "target" : "keyword",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "1",
       "source3" : "Keyword (any field)"
     }, {
       "target" : "personalname",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "2",
       "source3" : "Personal Name"
     }, {
       "target" : "corporatename",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "3",
       "source3" : "Corporate Name"
     }, {
       "target" : "meetingname",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "4",
       "source3" : "Meeting Name"
     }, {
       "target" : "allnames",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "5",
       "source3" : "Name"
     }, {
       "target" : "topic",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "6",
       "source3" : "Subject"
     }, {
       "target" : "geographic",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "7",
       "source3" : "Geographic Term"
     }, {
       "target" : "genreform",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "8",
       "source3" : "Genre/Form Term"
     }, {
       "target" : "title",
       "source1" : "TRAINING_1_INST:Auto1",
       "source2" : "9",
       "source3" : "Uniform Title"
     } ],
     "Call Slip Request Detailed Display" : [ {
       "target" : "request_type",
       "source1" : "request_type",
       "source2" : "1",
       "source3" : "default"
     }, {
       "target" : "title",
       "source1" : "title",
       "source2" : "2",
       "source3" : "default"
     }, {
       "target" : "request_status",
       "source1" : "request_status",
       "source2" : "3",
       "source3" : "default"
     }, {
       "target" : "pickup_location_name",
       "source1" : "pickup_location_name",
       "source2" : "3",
       "source3" : "default"
     }, {
       "target" : "end_callslip_date",
       "source1" : "end_callslip_date",
       "source2" : "4",
       "source3" : "default"
     }, {
       "target" : "ils_institution_name",
       "source1" : "ils_institution_name",
       "source2" : "7",
       "source3" : "default"
     } ],
     "Featured Results" : [ {
       "target" : "title",
       "source1" : "view",
       "source2" : "CentralIndex",
       "source3" : "Select resource type"
     }, {
       "target" : "Images",
       "source1" : "view",
       "source2" : "MyInstitution",
       "source3" : "images"
     } ],
     "Fines Brief Display" : [ {
       "target" : "&nbsp",
       "source1" : "default",
       "source2" : "fines.brief.1",
       "source3" : "title"
     }, {
       "target" : "&nbsp",
       "source1" : "default",
       "source2" : "fines.brief.2",
       "source3" : "finedate"
     } ],
     "Hold Optional Request Parameters" : [ {
       "target" : "No",
       "source1" : "default",
       "source2" : "last_interest_date"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "request_author"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "request_title"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "request_pages"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "patron_note_1"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "patron_note_2"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "rush_request"
     } ],
     "Location Item content" : [ {
       "target" : "5",
       "source1" : "default",
       "source2" : "item.brief.number_of_items"
     }, {
       "target" : "callnumber2",
       "source1" : "default",
       "source2" : "item.global.dataitem.1"
     }, {
       "target" : "noteopac",
       "source1" : "default",
       "source2" : "item.global.dataitem.2"
     }, {
       "target" : "itemmaterial",
       "source1" : "default",
       "source2" : "item.global.dataitem.3"
     }, {
       "target" : "mainlocationname secondarylocationname callnumber",
       "source1" : "default",
       "source2" : "item.global.dataitem.4"
     }, {
       "target" : "itembarcode",
       "source1" : "default",
       "source2" : "item.global.dataitem.5"
     } ],
     "Short Loan and Booking Request Detailed Display" : [ {
       "target" : "request_type",
       "source1" : "request_type",
       "source2" : "1",
       "source3" : "default"
     }, {
       "target" : "author",
       "source1" : "author",
       "source2" : "2",
       "source3" : "default"
     }, {
       "target" : "title",
       "source1" : "title",
       "source2" : "3",
       "source3" : "default"
     }, {
       "target" : "year",
       "source1" : "year",
       "source2" : "4",
       "source3" : "default"
     }, {
       "target" : "request_status",
       "source1" : "request_status",
       "source2" : "5",
       "source3" : "default"
     }, {
       "target" : "booking_start_date",
       "source1" : "booking_start_date",
       "source2" : "6",
       "source3" : "default"
     }, {
       "target" : "booking_start_hour",
       "source1" : "booking_start_hour",
       "source2" : "7",
       "source3" : "default"
     }, {
       "target" : "booking_end_date",
       "source1" : "booking_end_date",
       "source2" : "8",
       "source3" : "default"
     }, {
       "target" : "booking_end_hour",
       "source1" : "booking_end_hour",
       "source2" : "9",
       "source3" : "default"
     }, {
       "target" : "pickup_location_name",
       "source1" : "pickup_location_name",
       "source2" : "10",
       "source3" : "default"
     }, {
       "target" : "return_location",
       "source1" : "return_location",
       "source2" : "11",
       "source3" : "default"
     }, {
       "target" : "delivery_method",
       "source1" : "delivery_method",
       "source2" : "12",
       "source3" : "default"
     }, {
       "target" : "ils_institution_name",
       "source1" : "ils_institution_name",
       "source2" : "14",
       "source3" : "default"
     }, {
       "target" : "requester_id",
       "source1" : "requester_id",
       "source2" : "15",
       "source3" : "default"
     }, {
       "target" : "patron_note_1",
       "source1" : "patron_note_1",
       "source2" : "16",
       "source3" : "default"
     }, {
       "target" : "patron_note_2",
       "source1" : "patron_note_2",
       "source2" : "17",
       "source3" : "default"
     }, {
       "target" : "item_material",
       "source1" : "item_material",
       "source2" : "18",
       "source3" : "default"
     }, {
       "target" : "item_description",
       "source1" : "item_description",
       "source2" : "19",
       "source3" : "default"
     }, {
       "target" : "main_location_name",
       "source1" : "main_location_name",
       "source2" : "20",
       "source3" : "default"
     }, {
       "target" : "secondary_location_name",
       "source1" : "secondary_location_name",
       "source2" : "23",
       "source3" : "default"
     }, {
       "target" : "call_number",
       "source1" : "call_number",
       "source2" : "24",
       "source3" : "default"
     }, {
       "target" : "call_number_2",
       "source1" : "call_number_2",
       "source2" : "25",
       "source3" : "default"
     }, {
       "target" : "item_category_name",
       "source1" : "item_category_name",
       "source2" : "27",
       "source3" : "default"
     }, {
       "target" : "item_status_name",
       "source1" : "item_status_name",
       "source2" : "28",
       "source3" : "default"
     }, {
       "target" : "item_barcode",
       "source1" : "item_barcode",
       "source2" : "29",
       "source3" : "default"
     }, {
       "target" : "request_id",
       "source1" : "request_id",
       "source2" : "30",
       "source3" : "default"
     }, {
       "target" : "group_id",
       "source1" : "group_id",
       "source2" : "31",
       "source3" : "default"
     } ],
     "Voice Search Languages Activation" : [ ],
     "General Configuration" : [ {
       "target" : "MM/dd/yyyy",
       "source1" : "Short_Date_Format"
     }, {
       "target" : "MM/dd/yyyy",
       "source1" : "Long_Date_Format"
     } ],
     "consortia member codes" : [ ],
     "get it prefilter locations" : [ ],
     "Auto Complete Configuration" : [ {
       "target" : "TRAINING_1_INST",
       "source1" : "9e70096d-548d-462c-999a-e6741922ca52",
       "source2" : "05/07/23"
     } ],
     "Main Menu URLs for the New UI" : [ ],
     "direct linking config" : [ {
       "target" : "enableDirectLinking",
       "source1" : "No",
       "source3" : "1"
     }, {
       "target" : "enableDirectLinkingWhenMultipleServicesAreAvailable",
       "source1" : "true",
       "source3" : "1"
     }, {
       "target" : "authenticationNote",
       "source1" : "true",
       "source3" : "1"
     }, {
       "target" : "publicNote",
       "source1" : "true",
       "source3" : "1"
     }, {
       "target" : "disableDirectLinkingForDatabases",
       "source1" : "true",
       "source3" : "1"
     }, {
       "target" : "disableDirectLinkingForJournals",
       "source1" : "false",
       "source3" : "0"
     }, {
       "target" : "disableDirectLinkingForDigital",
       "source1" : "true",
       "source3" : "1"
     } ],
     "Citation styles" : [ {
       "target" : "modern-language-association-7th-edition",
       "source1" : "1"
     }, {
       "target" : "apa",
       "source1" : "2"
     }, {
       "target" : "turabian-fullnote-bibliography",
       "source1" : "3"
     }, {
       "target" : "modern-language-association",
       "source1" : "4"
     }, {
       "target" : "harvard-kings-college-london",
       "source1" : "5"
     } ],
     "Export RIS encodings" : [ {
       "target" : "ISO-8859-1",
       "source1" : "ISO-8859-1"
     }, {
       "target" : "US-ASCII",
       "source1" : "US-ASCII"
     }, {
       "target" : "windows-1251",
       "source1" : "windows-1251"
     }, {
       "target" : "UTF-8",
       "source1" : "UTF-8"
     } ],
     "Recall Optional Request Parameters" : [ {
       "target" : "No",
       "source1" : "default",
       "source2" : "last_interest_date"
     }, {
       "target" : "No",
       "source1" : "default",
       "source2" : "patron_note_1"
     } ],
     "Hold/Recall Request Detailed Display" : [ {
       "target" : "request_type",
       "source1" : "request_type",
       "source2" : "1",
       "source3" : "default"
     }, {
       "target" : "request_type_recall",
       "source1" : "request_type_recall",
       "source2" : "1",
       "source3" : "default"
     }, {
       "target" : "author",
       "source1" : "author",
       "source2" : "2",
       "source3" : "default"
     }, {
       "target" : "title",
       "source1" : "title",
       "source2" : "3",
       "source3" : "default"
     }, {
       "target" : "year",
       "source1" : "year",
       "source2" : "4",
       "source3" : "default"
     }, {
       "target" : "hold_status",
       "source1" : "hold_status",
       "source2" : "5",
       "source3" : "default"
     }, {
       "target" : "hold_date",
       "source1" : "hold_date",
       "source2" : "6",
       "source3" : "default"
     }, {
       "target" : "end_hold_date",
       "source1" : "end_hold_date",
       "source2" : "7",
       "source3" : "default"
     }, {
       "target" : "pickup_location_name",
       "source1" : "pickup_location_name",
       "source2" : "8",
       "source3" : "default"
     }, {
       "target" : "ils_institution_name",
       "source1" : "ils_institution_name",
       "source2" : "10",
       "source3" : "default"
     }, {
       "target" : "requester_id",
       "source1" : "requester_id",
       "source2" : "11",
       "source3" : "default"
     }, {
       "target" : "request_author",
       "source1" : "request_author",
       "source2" : "12",
       "source3" : "default"
     }, {
       "target" : "request_title",
       "source1" : "request_title",
       "source2" : "13",
       "source3" : "default"
     }, {
       "target" : "request_pages",
       "source1" : "request_pages",
       "source2" : "14",
       "source3" : "default"
     }, {
       "target" : "patron_note_1",
       "source1" : "patron_note_1",
       "source2" : "15",
       "source3" : "default"
     }, {
       "target" : "patron_note_2",
       "source1" : "patron_note_2",
       "source2" : "16",
       "source3" : "default"
     }, {
       "target" : "item_description",
       "source1" : "item_description",
       "source2" : "17",
       "source3" : "default"
     }, {
       "target" : "main_location_name",
       "source1" : "main_location_name",
       "source2" : "19",
       "source3" : "default"
     }, {
       "target" : "secondary_location_name",
       "source1" : "secondary_location_name",
       "source2" : "21",
       "source3" : "default"
     }, {
       "target" : "call_number",
       "source1" : "call_number",
       "source2" : "22",
       "source3" : "default"
     }, {
       "target" : "call_number_2",
       "source1" : "call_number_2",
       "source2" : "23",
       "source3" : "default"
     }, {
       "target" : "item_category_name",
       "source1" : "item_category_name",
       "source2" : "25",
       "source3" : "default"
     }, {
       "target" : "item_status_name",
       "source1" : "item_status_name",
       "source2" : "26",
       "source3" : "default"
     }, {
       "target" : "request_date",
       "source1" : "request_date",
       "source2" : "27",
       "source3" : "default"
     }, {
       "target" : "end_request_date",
       "source1" : "end_request_date",
       "source2" : "28",
       "source3" : "default"
     }, {
       "target" : "request_id",
       "source1" : "request_id",
       "source2" : "29",
       "source3" : "default"
     }, {
       "target" : "group_id",
       "source1" : "group_id",
       "source2" : "30",
       "source3" : "default"
     } ],
     "Holdings Record Configuration" : [ {
       "target" : "866 ## az",
       "source1" : "default",
       "source2" : "loc.summary",
       "source3" : "ALMA_01",
       "source4" : "1"
     }, {
       "target" : "867 ## az",
       "source1" : "default",
       "source2" : "loc.summary_supp",
       "source3" : "ALMA_01",
       "source4" : "2"
     }, {
       "target" : "868 ## az",
       "source1" : "default",
       "source2" : "loc.summary_index",
       "source3" : "ALMA_01",
       "source4" : "3"
     }, {
       "target" : "852 ## t",
       "source1" : "default",
       "source2" : "loc.addnote1",
       "source3" : "ALMA_01",
       "source4" : "4"
     }, {
       "target" : "852 ## z",
       "source1" : "default",
       "source2" : "loc.notes",
       "source3" : "ALMA_01",
       "source4" : "5"
     }, {
       "target" : "541 ## a",
       "source1" : "default",
       "source2" : "loc.acq.status",
       "source3" : "ALMA_01",
       "source4" : "6"
     }, {
       "target" : "561 ## a",
       "source1" : "default",
       "source2" : "loc.addnote2",
       "source3" : "ALMA_01",
       "source4" : "7"
     }, {
       "target" : "563 ## a",
       "source1" : "default",
       "source2" : "loc.addnote3",
       "source3" : "ALMA_01",
       "source4" : "8"
     } ],
     "Institution Base URLs" : [ {
       "target" : "http://1.1.1.1",
       "source1" : "TRAINING_1_INST",
       "source2" : "ils_base"
     }, {
       "target" : "http://1.1.1.1",
       "source1" : "TRAINING_1_INST",
       "source2" : "api_base"
     } ]
   },
   "authentication" : [ {
     "profile-name" : "Alma",
     "authentication-system" : "ALMA",
     "silent-login-enabled" : "false"
   }, {
     "profile-name" : "SAML",
     "authentication-system" : "SAML",
     "silent-login-enabled" : "true"
   } ],
   "scopes-context-map" : {
     "CentralIndex" : "C",
     "MyInst_and_CI" : "B",
     "jsearch_scope" : "L",
     "Research" : "L",
     "CourseReserves" : "L",
     "MyInstitution" : "L",
     "ebsco" : "C"
   },
   "backend_system" : "suprima",
   "customization" : {
     "resourceIcons" : { },
     "additionalLocationIcons" : { },
     "staticHtml" : { }
   },
   "UIComponents" : {
     "1217281788UI" : {
       "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
       "type" : {
         "_string" : "language"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
       "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
     },
     "drStartYear" : {
       "indexFields" : [ "cdate" ],
       "type" : {
         "_string" : "drStartYear"
       },
       "defaultOption" : "",
       "displayOptions" : [ ],
       "options" : [ ]
     },
     "1705541130UI" : {
       "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
       "type" : {
         "_string" : "language"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
       "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
     },
     "1406353208UI" : {
       "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
       "type" : {
         "_string" : "precisionOperator"
       },
       "defaultOption" : "contains",
       "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
       "options" : [ "contains", "exact", "begins_with", "equals" ]
     },
     "582224291UI" : {
       "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
       "type" : {
         "_string" : "mediaType"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
       "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
     },
     "boolOperator" : {
       "indexFields" : [ "AND", "OR", "NOT" ],
       "type" : {
         "_string" : "boolOperator"
       },
       "defaultOption" : "AND",
       "displayOptions" : [ "AND", "OR", "NOT" ],
       "options" : [ "AND", "OR", "NOT" ]
     },
     "drStartDay" : {
       "indexFields" : [ "cdate" ],
       "type" : {
         "_string" : "drStartDay"
       },
       "defaultOption" : "start_day",
       "displayOptions" : [ "start_day", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ],
       "options" : [ "start_day", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ]
     },
     "730097680UI" : {
       "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
       "type" : {
         "_string" : "precisionOperator"
       },
       "defaultOption" : "contains",
       "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
       "options" : [ "contains", "exact", "begins_with", "equals" ]
     },
     "1674411570UI" : {
       "indexFields" : [ "mesh", "any", "title", "creator", "sub", "issn", "user_tags" ],
       "type" : {
         "_string" : "scope"
       },
       "defaultOption" : "mesh",
       "displayOptions" : [ "mesh", "any", "title", "creator", "sub", "issn", "user_tags" ],
       "options" : [ "mesh", "any", "title", "creator", "sub", "issn", "user_tags" ]
     },
     "1274954208UI" : {
       "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
       "type" : {
         "_string" : "precisionOperator"
       },
       "defaultOption" : "contains",
       "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
       "options" : [ "contains", "exact", "begins_with", "equals" ]
     },
     "drEndMonth" : {
       "indexFields" : [ "cdate" ],
       "type" : {
         "_string" : "drEndMonth"
       },
       "defaultOption" : "end_month",
       "displayOptions" : [ "end_month", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ],
       "options" : [ "end_month", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]
     },
     "1950044767UI" : {
       "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
       "type" : {
         "_string" : "mediaType"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
       "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
     },
     "1762138316UI" : {
       "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
       "type" : {
         "_string" : "language"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
       "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
     },
     "4154504UI" : {
       "indexFields" : [ "mesh", "any", "title", "creator", "sub", "issn", "user_tags" ],
       "type" : {
         "_string" : "scope"
       },
       "defaultOption" : "mesh",
       "displayOptions" : [ "mesh", "any", "title", "creator", "sub", "issn", "user_tags" ],
       "options" : [ "mesh", "any", "title", "creator", "sub", "issn", "user_tags" ]
     },
     "445874019UI" : {
       "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
       "type" : {
         "_string" : "precisionOperator"
       },
       "defaultOption" : "contains",
       "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
       "options" : [ "contains", "exact", "begins_with", "equals" ]
     },
     "1218357022UI" : {
       "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
       "type" : {
         "_string" : "precisionOperator"
       },
       "defaultOption" : "contains",
       "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
       "options" : [ "contains", "exact", "begins_with", "equals" ]
     },
     "2048511964UI" : {
       "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
       "type" : {
         "_string" : "mediaType"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
       "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
     },
     "921946457UI" : {
       "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
       "type" : {
         "_string" : "precisionOperator"
       },
       "defaultOption" : "contains",
       "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
       "options" : [ "contains", "exact", "begins_with", "equals" ]
     },
     "drEndDay" : {
       "indexFields" : [ "cdate" ],
       "type" : {
         "_string" : "drEndDay"
       },
       "defaultOption" : "end_day",
       "displayOptions" : [ "end_day", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ],
       "options" : [ "end_day", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ]
     },
     "162066873UI" : {
       "indexFields" : [ "any", "title", "creator", "sub", "course_instructor", "course_code", "course_name", "course_department_name", "issn", "user_tags" ],
       "type" : {
         "_string" : "scope"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "title", "creator", "sub", "course_instructor", "course_code", "course_name", "course_department_name", "issn", "user_tags" ],
       "options" : [ "any", "title", "creator", "sub", "course_instructor", "course_code", "course_name", "course_department_name", "issn", "user_tags" ]
     },
     "1758195990UI" : {
       "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
       "type" : {
         "_string" : "mediaType"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
       "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
     },
     "919169100UI" : {
       "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
       "type" : {
         "_string" : "language"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
       "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
     },
     "1991914778UI" : {
       "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
       "type" : {
         "_string" : "mediaType"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
       "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
     },
     "drStartMonth" : {
       "indexFields" : [ "cdate" ],
       "type" : {
         "_string" : "drStartMonth"
       },
       "defaultOption" : "start_month",
       "displayOptions" : [ "start_month", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ],
       "options" : [ "start_month", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]
     },
     "drEndYear" : {
       "indexFields" : [ "cdate" ],
       "type" : {
         "_string" : "drEndYear"
       },
       "defaultOption" : "",
       "displayOptions" : [ ],
       "options" : [ ]
     },
     "41310089UI" : {
       "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
       "type" : {
         "_string" : "language"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
       "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
     },
     "1617814384UI" : {
       "indexFields" : [ "mesh", "any", "title", "creator", "sub", "issn", "user_tags" ],
       "type" : {
         "_string" : "scope"
       },
       "defaultOption" : "mesh",
       "displayOptions" : [ "mesh", "any", "title", "creator", "sub", "issn", "user_tags" ],
       "options" : [ "mesh", "any", "title", "creator", "sub", "issn", "user_tags" ]
     },
     "378254898UI" : {
       "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
       "type" : {
         "_string" : "mediaType"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
       "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
     },
     "1970822135UI" : {
       "indexFields" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
       "type" : {
         "_string" : "scope"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
       "options" : [ "any", "title", "creator", "sub", "issn", "user_tags" ]
     },
     "752947723UI" : {
       "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
       "type" : {
         "_string" : "language"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
       "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
     },
     "1240131831UI" : {
       "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
       "type" : {
         "_string" : "precisionOperator"
       },
       "defaultOption" : "contains",
       "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
       "options" : [ "contains", "exact", "begins_with", "equals" ]
     },
     "2132296384UI" : {
       "indexFields" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
       "type" : {
         "_string" : "scope"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
       "options" : [ "any", "title", "creator", "sub", "issn", "user_tags" ]
     },
     "freeText" : {
       "indexFields" : [ "any" ],
       "type" : { },
       "defaultOption" : "",
       "displayOptions" : [ ],
       "options" : [ ]
     },
     "212033521UI" : {
       "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
       "type" : {
         "_string" : "mediaType"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
       "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
     },
     "1409130565UI" : {
       "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
       "type" : {
         "_string" : "language"
       },
       "defaultOption" : "any",
       "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
       "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
     },
     "956324685UI" : {
       "indexFields" : [ "mesh", "any", "title", "creator", "sub", "issn", "user_tags" ],
       "type" : {
         "_string" : "scope"
       },
       "defaultOption" : "mesh",
       "displayOptions" : [ "mesh", "any", "title", "creator", "sub", "issn", "user_tags" ],
       "options" : [ "mesh", "any", "title", "creator", "sub", "issn", "user_tags" ]
     }
   },
   "queryTerms" : {
     "TRAINING_1_INST:Auto1.prescisionOperators.LibraryCatalog" : [ "445874019UI" ],
     "TRAINING_1_INST:Auto1.prescisionOperators.Research" : [ "1274954208UI" ],
     "TRAINING_1_INST:Auto1.prescisionOperators.CourseReserves" : [ "1240131831UI" ],
     "TRAINING_1_INST:Auto1.language.jsearch_slot" : [ "1217281788UI" ],
     "TRAINING_1_INST:Auto1.mediaType.Research" : [ "1991914778UI" ],
     "TRAINING_1_INST:Auto1.language.Research" : [ "1762138316UI" ],
     "TRAINING_1_INST:Auto1.language.CourseReserves" : [ "752947723UI" ],
     "TRAINING_1_INST:Auto1.searchbox_complex.CentralIndex" : [ "freeText", "boolOperator", "1674411570UI", "1218357022UI" ],
     "TRAINING_1_INST:Auto1.searchbox_complex.Research" : [ "freeText", "boolOperator", "1617814384UI", "1274954208UI" ],
     "TRAINING_1_INST:Auto1.searchbox_complex.Ebsco" : [ "freeText", "boolOperator", "1970822135UI", "921946457UI" ],
     "TRAINING_1_INST:Auto1.date_range.Everything" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ],
     "TRAINING_1_INST:Auto1.mediaType.Ebsco" : [ "1950044767UI" ],
     "TRAINING_1_INST:Auto1.searchbox_complex.Everything" : [ "freeText", "boolOperator", "4154504UI", "1406353208UI" ],
     "TRAINING_1_INST:Auto1.searchbox_complex.CourseReserves" : [ "freeText", "boolOperator", "162066873UI", "1240131831UI" ],
     "TRAINING_1_INST:Auto1.mediaType.LibraryCatalog" : [ "582224291UI" ],
     "TRAINING_1_INST:Auto1.date_range.CourseReserves" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ],
     "TRAINING_1_INST:Auto1.language.Ebsco" : [ "1409130565UI" ],
     "TRAINING_1_INST:Auto1.mediaType.Everything" : [ "378254898UI" ],
     "TRAINING_1_INST:Auto1.prescisionOperators.jsearch_slot" : [ "730097680UI" ],
     "TRAINING_1_INST:Auto1.searchbox_complex.jsearch_slot" : [ "freeText", "boolOperator", "2132296384UI", "730097680UI" ],
     "TRAINING_1_INST:Auto1.mediaType.jsearch_slot" : [ "1758195990UI" ],
     "TRAINING_1_INST:Auto1.searchbox_complex.LibraryCatalog" : [ "freeText", "boolOperator", "956324685UI", "445874019UI" ],
     "TRAINING_1_INST:Auto1.date_range.Research" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ],
     "TRAINING_1_INST:Auto1.date_range.CentralIndex" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ],
     "TRAINING_1_INST:Auto1.language.Everything" : [ "919169100UI" ],
     "TRAINING_1_INST:Auto1.language.CentralIndex" : [ "1705541130UI" ],
     "TRAINING_1_INST:Auto1.prescisionOperators.Everything" : [ "1406353208UI" ],
     "TRAINING_1_INST:Auto1.language.LibraryCatalog" : [ "41310089UI" ],
     "TRAINING_1_INST:Auto1.prescisionOperators.Ebsco" : [ "921946457UI" ],
     "TRAINING_1_INST:Auto1.date_range.jsearch_slot" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ],
     "TRAINING_1_INST:Auto1.date_range.Ebsco" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ],
     "TRAINING_1_INST:Auto1.date_range.LibraryCatalog" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ],
     "TRAINING_1_INST:Auto1.mediaType.CentralIndex" : [ "2048511964UI" ],
     "TRAINING_1_INST:Auto1.prescisionOperators.CentralIndex" : [ "1218357022UI" ],
     "TRAINING_1_INST:Auto1.mediaType.CourseReserves" : [ "212033521UI" ]
   },
   "bx-enable" : false,
   "tab-to-tiles" : {
     "Everything" : [ "TRAINING_1_INST:Auto1.FacetTileInterface.Everything", "TRAINING_1_INST:Auto1.KeepingItemTileInterface.Everything", "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.Everything", "TRAINING_1_INST:Auto1.ResultFullTileInterface.Everything", "TRAINING_1_INST:Auto1.ResultTileInterface.Everything", "TRAINING_1_INST:Auto1.LocationsTileInterface.Everything", "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.Everything" ],
     "CentralIndex" : [ "TRAINING_1_INST:Auto1.FacetTileInterface.CentralIndex", "TRAINING_1_INST:Auto1.KeepingItemTileInterface.CentralIndex", "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.CentralIndex", "TRAINING_1_INST:Auto1.ResultFullTileInterface.CentralIndex", "TRAINING_1_INST:Auto1.ResultTileInterface.CentralIndex", "TRAINING_1_INST:Auto1.LocationsTileInterface.CentralIndex", "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.CentralIndex" ],
     "jsearch_slot" : [ "TRAINING_1_INST:Auto1.FacetTileInterface.jsearch_slot", "TRAINING_1_INST:Auto1.KeepingItemTileInterface.jsearch_slot", "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.jsearch_slot", "TRAINING_1_INST:Auto1.ResultFullTileInterface.jsearch_slot", "TRAINING_1_INST:Auto1.ResultTileInterface.jsearch_slot", "TRAINING_1_INST:Auto1.LocationsTileInterface.jsearch_slot", "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.jsearch_slot" ],
     "Ebsco" : [ "TRAINING_1_INST:Auto1.FacetTileInterface.Ebsco", "TRAINING_1_INST:Auto1.KeepingItemTileInterface.Ebsco", "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.Ebsco", "TRAINING_1_INST:Auto1.ResultFullTileInterface.Ebsco", "TRAINING_1_INST:Auto1.ResultTileInterface.Ebsco", "TRAINING_1_INST:Auto1.LocationsTileInterface.Ebsco", "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.Ebsco" ],
     "Research" : [ "TRAINING_1_INST:Auto1.FacetTileInterface.Research", "TRAINING_1_INST:Auto1.KeepingItemTileInterface.Research", "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.Research", "TRAINING_1_INST:Auto1.ResultFullTileInterface.Research", "TRAINING_1_INST:Auto1.ResultTileInterface.Research", "TRAINING_1_INST:Auto1.LocationsTileInterface.Research", "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.Research" ],
     "CourseReserves" : [ "TRAINING_1_INST:Auto1.FacetTileInterface.CourseReserves", "TRAINING_1_INST:Auto1.KeepingItemTileInterface.CourseReserves", "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.CourseReserves", "TRAINING_1_INST:Auto1.ResultFullTileInterface.CourseReserves", "TRAINING_1_INST:Auto1.ResultTileInterface.CourseReserves", "TRAINING_1_INST:Auto1.LocationsTileInterface.CourseReserves", "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.CourseReserves" ],
     "LibraryCatalog" : [ "TRAINING_1_INST:Auto1.FacetTileInterface.LibraryCatalog", "TRAINING_1_INST:Auto1.KeepingItemTileInterface.LibraryCatalog", "TRAINING_1_INST:Auto1.SearchTileInterface-Advanced.LibraryCatalog", "TRAINING_1_INST:Auto1.ResultFullTileInterface.LibraryCatalog", "TRAINING_1_INST:Auto1.ResultTileInterface.LibraryCatalog", "TRAINING_1_INST:Auto1.LocationsTileInterface.LibraryCatalog", "TRAINING_1_INST:Auto1.SearchTileInterface-Simple.LibraryCatalog" ]
   },
   "searchWithinJournalConfig" : {
     "tab" : "Everything",
     "scope" : "MyInst_and_CI"
   },
   "journal_tab" : "jsearch_slot",
   "institution-base-url" : "ALMA_OPENURL",
   "fieldsWithUseTranslation" : [ ],
   "summon_over_alma" : false,
   "rapido_sa_enabled" : false,
   "syndeticunbound-enable" : false,
   "enableSingleLogout" : false,
   "enableExtendSession" : false,
   "enableExtendSessionToMax" : false,
   "enableUserSettingForExtendSession" : false,
   "useEsploroFullAssetPage" : false,
   "useEsploroSearchPage" : false,
   "feature-flags" : {
     "display_CDI_document_attributes" : true,
     "mobile_viewer_fullview" : true,
     "new_pdfjs" : true,
     "exhibitions_creator" : false,
     "view_to_library_for_rta" : true,
     "highlight_the_record_you_came_from" : true,
     "bulk_export" : true,
     "may_also_be_held_by_enhancement" : true,
     "filter_by_all_fines_types_in_my_library_card" : true,
     "configuration_to_use_filtered_or_expand_search_for_citation_trail" : true,
     "personal_delivery_addresses" : true,
     "add_search_to_favorites" : true,
     "digital_viewer_supporting_office_documents" : true,
     "enable_patrons_to_check_keep_me_signed_in" : true,
     "epub_via_alma_viewer" : true,
     "direct_login" : true,
     "cm_override_winpop" : true,
     "primo_ve_handle_autocomplete_request_punctuation" : true,
     "split_configuration_for_hypertext_linking_uses_exact_and_only" : true
   },
   "country-codes" : [ "BMU", "BTN", "BOL", "BIH", "BWA", "BRA", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "COL", "COM", "COG", "COD", "COK", "CRI", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "ISR", "ITA", "CIV", "JAM", "JPN", "JOR", "KAZ", "KEN", "KIR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "PRK", "NOR", "OMN", "PAK", "PLW", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "ROU", "RUS", "RWA", "BLM", "VCT", "WSM", "SMR", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SVK", "SVN", "SLB", "SOM", "ZAF", "KOR", "ESP", "LKA", "SDN", "SUR", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "URY", "UZB", "VUT", "VAT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE", "AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN" ],
   "discovery_services_page" : false,
   "discovery_local_no_login" : false,
   "discovery_with_external_no_login" : false,
   "limited_patrons_in_alma_starter" : false,
   "IsViewNdeEnabled" : false,
   "enable_mixpanel" : false
 };

 json2 = {"beaconO22":"1",
 "primo-view" : {
   "available-tabs" : [ "Everything", "LibraryCatalog", "CentralIndex", "Ebsco", "worldcat" ],
   "institution" : {
     "description" : "Boston College",
     "id" : 1021,
     "org-fields" : {
       "customer-code" : "01BC_INST",
       "customer-id" : 1010,
       "institution-id" : 1021
     },
     "is-org-fields-set" : true,
     "institution-code" : "01BC_INST",
     "institution-name" : "Boston College",
     "last-modified-time-stamp" : "Aug 23, 2021 09:43:39 AM",
     "updated-by" : "briandwo",
     "newspapers-search" : true
   },
   "pc-availability-tab-scopes-map" : {
     "Everything" : {
       "MyInst_and_CI" : "AVAILABLE_ONLY"
     },
     "CentralIndex" : {
       "CentralIndex" : "AVAILABLE_ONLY"
     }
   },
   "view-org-level" : {
     "customer-code" : "01BC_INST",
     "customer-id" : 1010,
     "institution-id" : 1021
   },
   "attributes-map" : {
     "tabsRemote" : "false",
     "css" : "Primo_default.3.0.css",
     "sessionTimeoutURL" : "",
     "interfaceLanguageOptions" : "de,en,fr,he,pl",
     "threeLettersLanguagesOptions" : "de,en,fr,he,pl",
     "libCard" : "true",
     "defaultUserInstitution" : "Boston College",
     "customerCode" : "CUSTOMER",
     "layout" : "custom layout",
     "bulkSizeOptions" : "10;20;30;50",
     "institution" : "Boston College",
     "bulkSize" : "10",
     "supportedDocumentsLanguageOptions" : "iw;en;nl;kl;fr",
     "interfaceLanguage" : "en",
     "institutionCode" : "01BC_INST",
     "mobileCss" : "mobile.css",
     "ownerInstituionCode" : "VOLCANO",
     "citationTrailsEnabled" : true,
     "citationTrailsFilterByAvailability" : true,
     "selectedFacetLocation" : "right",
     "personalizationEnabled" : true,
     "moreLikeCourse" : true,
     "moreLikeCollection" : true,
     "collectionDiscoveryEnabled" : true,
     "displayNewspapersLink" : true,
     "displayFeaturedNewspapers" : true,
     "refEntryActive" : true,
     "relatedItemsActive" : true,
     "legantoURLTemplate" : "",
     "multilingualConfigurationEnabled" : false,
     "journalCategoriesTree" : true,
     "newspaperSearchFilterByAvailability" : true,
     "displayVoiceSearch" : true,
     "displayLibraryNameLocationFacet" : false,
     "virtualBrowseType" : "shelf",
     "editMyLibraryCard" : true,
     "mayAlsoBeHeldByEnabled" : true
   },
   "auto-complete-enabled-map" : {
     "CentralIndex" : true,
     "MyInst_and_CI" : true,
     "WorldCat" : true,
     "jsearch_scope" : false,
     "Ebsco" : true,
     "MyInstitution" : true
   },
   "scopes" : [ {
     "scope-id" : "MyInst_and_CI",
     "locations" : "primo_central_multiple_fe,Local",
     "types" : "adaptor,local",
     "tab" : "Everything",
     "tab-id-for-scope-matching" : "Everything",
     "contains-central-index-scope" : true
   }, {
     "scope-id" : "MyInstitution",
     "locations" : "Local",
     "types" : "local",
     "tab" : "LibraryCatalog",
     "tab-id-for-scope-matching" : "LibraryCatalog",
     "contains-central-index-scope" : false
   }, {
     "scope-id" : "CentralIndex",
     "locations" : "primo_central_multiple_fe",
     "types" : "adaptor",
     "tab" : "CentralIndex",
     "tab-id-for-scope-matching" : "CentralIndex",
     "contains-central-index-scope" : true
   }, {
     "scope-id" : "Ebsco",
     "locations" : "EbscoLocal",
     "types" : "adaptor",
     "tab" : "Ebsco",
     "tab-id-for-scope-matching" : "Ebsco",
     "contains-central-index-scope" : false
   }, {
     "scope-id" : "WorldCat",
     "locations" : "WorldCatLocal",
     "types" : "adaptor",
     "tab" : "worldcat",
     "tab-id-for-scope-matching" : "worldcat",
     "contains-central-index-scope" : false
   } ],
   "cdi-ft-search-tab-scopes-map" : {
     "Everything" : {
       "MyInst_and_CI" : "no-always"
     },
     "CentralIndex" : {
       "CentralIndex" : "no-enduser-selection"
     }
   },
   "timeout" : {
     "guest-ui-timeout" : "0"
   },
   "is-union-catalog-view" : false,
   "display-unpaywall-links" : true,
   "display_quick_links" : "false"
 },
 "tiles" : {
   "HeaderTileInterface" : { },
   "FacetTileInterface" : {
     "01BC_INST:Auto1.FacetTileInterface.Ebsco" : {
       "toplevelfacet" : true,
       "toplevelsidefacet" : false,
       "generalpageactions" : false,
       "facetview" : [ {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 5,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_tlevel",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_topic",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_creator",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "alpha_numeric",
           "_int" : 1
         },
         "id" : "facet_library",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "alpha_numeric",
           "_int" : 1
         },
         "id" : "facet_location_code",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_rtype",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_domain",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_creationdate",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_jtitle",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_lang",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "none",
           "_int" : 1
         },
         "id" : "facet_newrecords",
         "useTranslations" : false
       } ],
       "relatedfacetview" : { },
       "id" : "01BC_INST:Auto1.FacetTileInterface.Ebsco"
     },
     "01BC_INST:Auto1.FacetTileInterface.jsearch_slot" : {
       "toplevelfacet" : true,
       "toplevelsidefacet" : false,
       "generalpageactions" : false,
       "facetview" : [ {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 5,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_tlevel",
         "useTranslations" : false
       } ],
       "relatedfacetview" : { },
       "id" : "01BC_INST:Auto1.FacetTileInterface.jsearch_slot"
     },
     "01BC_INST:Auto1.FacetTileInterface.CentralIndex" : {
       "toplevelfacet" : true,
       "toplevelsidefacet" : false,
       "generalpageactions" : false,
       "facetview" : [ {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 5,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_tlevel",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_topic",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_creator",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "alpha_numeric",
           "_int" : 1
         },
         "id" : "facet_library",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "alpha_numeric",
           "_int" : 1
         },
         "id" : "facet_location_code",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_rtype",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_domain",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_creationdate",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_jtitle",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_lang",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "none",
           "_int" : 1
         },
         "id" : "facet_newrecords",
         "useTranslations" : false
       } ],
       "relatedfacetview" : { },
       "id" : "01BC_INST:Auto1.FacetTileInterface.CentralIndex"
     },
     "01BC_INST:Auto1.FacetTileInterface.Everything" : {
       "toplevelfacet" : true,
       "toplevelsidefacet" : false,
       "generalpageactions" : false,
       "facetview" : [ {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 5,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_tlevel",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_topic",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_creator",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "alpha_numeric",
           "_int" : 1
         },
         "id" : "facet_library",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "alpha_numeric",
           "_int" : 1
         },
         "id" : "facet_location_code",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_rtype",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_domain",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_creationdate",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_jtitle",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_lang",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "none",
           "_int" : 1
         },
         "id" : "facet_newrecords",
         "useTranslations" : false
       } ],
       "relatedfacetview" : { },
       "id" : "01BC_INST:Auto1.FacetTileInterface.Everything"
     },
     "01BC_INST:Auto1.FacetTileInterface.worldcat" : {
       "toplevelfacet" : true,
       "toplevelsidefacet" : false,
       "generalpageactions" : false,
       "facetview" : [ {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 5,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_tlevel",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_topic",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_creator",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "alpha_numeric",
           "_int" : 1
         },
         "id" : "facet_library",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "alpha_numeric",
           "_int" : 1
         },
         "id" : "facet_location_code",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_rtype",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_domain",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_creationdate",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_jtitle",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_lang",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "none",
           "_int" : 1
         },
         "id" : "facet_newrecords",
         "useTranslations" : false
       } ],
       "relatedfacetview" : { },
       "id" : "01BC_INST:Auto1.FacetTileInterface.worldcat"
     },
     "01BC_INST:Auto1.FacetTileInterface.LibraryCatalog" : {
       "toplevelfacet" : true,
       "toplevelsidefacet" : false,
       "generalpageactions" : false,
       "facetview" : [ {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 5,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_tlevel",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_topic",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_creator",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "alpha_numeric",
           "_int" : 1
         },
         "id" : "facet_library",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "alpha_numeric",
           "_int" : 1
         },
         "id" : "facet_location_code",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_rtype",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_domain",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_creationdate",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_jtitle",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "by_size",
           "_int" : 1
         },
         "id" : "facet_lang",
         "useTranslations" : false
       }, {
         "display" : true,
         "viewinstsort" : false,
         "instsort" : false,
         "valid" : true,
         "count" : 0,
         "sort" : {
           "_string" : "none",
           "_int" : 1
         },
         "id" : "facet_newrecords",
         "useTranslations" : false
       } ],
       "relatedfacetview" : { },
       "id" : "01BC_INST:Auto1.FacetTileInterface.LibraryCatalog"
     }
   },
   "KeepingItemTileInterface" : {
     "01BC_INST:Auto1.KeepingItemTileInterface" : {
       "keepingitemfunctionview" : [ ],
       "id" : "Auto1.KeepingItemTileInterface"
     }
   },
   "MainMenuTileInterface" : {
     "01BC_INST:Auto1.MainMenuTileInterface" : {
       "mainview" : [ {
         "url" : "jsearch",
         "label" : "JournalSearch",
         "target" : "_self"
       }, {
         "url" : "tags",
         "label" : "tags",
         "target" : "_self"
       }, {
         "url" : "/discovery/search?vid=01BC_INST:Auto1",
         "label" : "LibrarySearch",
         "target" : "_self"
       }, {
         "url" : "BlankIll",
         "label" : "BlankIll",
         "target" : "_self"
       }, {
         "url" : "citationlinker",
         "label" : "citationlinker",
         "target" : "_self"
       }, {
         "url" : "bsearch",
         "label" : "BrowseSearch",
         "target" : "_self"
       }, {
         "url" : "PurchaseRequest",
         "label" : "PurchaseRequest",
         "target" : "_self"
       }, {
         "url" : "/discovery/collectionDiscovery?vid=01BC_INST:Auto1",
         "label" : "CollectionDiscovery",
         "target" : "_self"
       }, {
         "url" : "/discovery/npsearch?vid=01BC_INST:Auto1",
         "label" : "NewspaperSearch",
         "target" : "_self"
       } ],
       "id" : "01BC_INST:Auto1.MainMenuTileInterface"
     }
   },
   "StaticHTMLTileInterface" : {
     "01BC_INST:Auto1.StaticHTMLTileInterface" : {
       "news" : "/static_htmls/news.html",
       "featured" : "/static_htmls/featured.html",
       "signinTips" : "/static_htmls/signin_tips.html",
       "ideasFull" : "/static_htmls/ideasfull.jsp",
       "atoz" : "/static_htmls/atoz.html",
       "footer" : "/static_htmls/footer.html",
       "service" : "/static_htmls/service.html",
       "signin" : "/static_htmls/singin.html",
       "noResults" : "/static_htmls/noResults.html",
       "header" : "/static_htmls/header.html",
       "ideasBrief" : "/static_htmls/ideasbrief.jsp",
       "browse" : "/static_htmls/browse.html"
     }
   },
   "SearchTileInterface" : {
     "01BC_INST:Auto1.SearchTileInterface-Simple.worldcat" : {
       "qtvinstance" : [ {
         "qtvid" : "01BC_INST:Auto1.searchbox_complex.worldcat"
       }, {
         "qtvid" : "01BC_INST:Auto1.mediaType.worldcat"
       }, {
         "qtvid" : "01BC_INST:Auto1.language.worldcat"
       }, {
         "qtvid" : "01BC_INST:Auto1.date_range.worldcat"
       }, {
         "qtvid" : "01BC_INST:Auto1.prescisionOperators.worldcat"
       } ],
       "prefiltersenable" : false,
       "indexedPrefiltersenable" : false,
       "resourcetypePrefiltersenable" : false,
       "alphabeticLanguagesSort" : false
     },
     "01BC_INST:Auto1.SearchTileInterface-Simple.Everything" : {
       "qtvinstance" : [ {
         "qtvid" : "01BC_INST:Auto1.searchbox_complex.Everything"
       }, {
         "qtvid" : "01BC_INST:Auto1.mediaType.Everything"
       }, {
         "qtvid" : "01BC_INST:Auto1.language.Everything"
       }, {
         "qtvid" : "01BC_INST:Auto1.date_range.Everything"
       }, {
         "qtvid" : "01BC_INST:Auto1.prescisionOperators.Everything"
       } ],
       "prefiltersenable" : false,
       "indexedPrefiltersenable" : false,
       "resourcetypePrefiltersenable" : false,
       "alphabeticLanguagesSort" : false
     },
     "01BC_INST:Auto1.SearchTileInterface-Simple.CentralIndex" : {
       "qtvinstance" : [ {
         "qtvid" : "01BC_INST:Auto1.searchbox_complex.CentralIndex"
       }, {
         "qtvid" : "01BC_INST:Auto1.mediaType.CentralIndex"
       }, {
         "qtvid" : "01BC_INST:Auto1.language.CentralIndex"
       }, {
         "qtvid" : "01BC_INST:Auto1.date_range.CentralIndex"
       }, {
         "qtvid" : "01BC_INST:Auto1.prescisionOperators.CentralIndex"
       } ],
       "prefiltersenable" : false,
       "indexedPrefiltersenable" : false,
       "resourcetypePrefiltersenable" : false,
       "alphabeticLanguagesSort" : false
     },
     "01BC_INST:Auto1.SearchTileInterface-Advanced.Everything" : {
       "qtvinstance" : [ {
         "qtvid" : "01BC_INST:Auto1.searchbox_complex.Everything"
       }, {
         "qtvid" : "01BC_INST:Auto1.mediaType.Everything"
       }, {
         "qtvid" : "01BC_INST:Auto1.language.Everything"
       }, {
         "qtvid" : "01BC_INST:Auto1.date_range.Everything"
       }, {
         "qtvid" : "01BC_INST:Auto1.prescisionOperators.Everything"
       } ],
       "prefiltersenable" : false,
       "indexedPrefiltersenable" : false,
       "resourcetypePrefiltersenable" : false,
       "alphabeticLanguagesSort" : true
     },
     "01BC_INST:Auto1.SearchTileInterface-Advanced.worldcat" : {
       "qtvinstance" : [ {
         "qtvid" : "01BC_INST:Auto1.searchbox_complex.worldcat"
       }, {
         "qtvid" : "01BC_INST:Auto1.mediaType.worldcat"
       }, {
         "qtvid" : "01BC_INST:Auto1.language.worldcat"
       }, {
         "qtvid" : "01BC_INST:Auto1.date_range.worldcat"
       }, {
         "qtvid" : "01BC_INST:Auto1.prescisionOperators.worldcat"
       } ],
       "prefiltersenable" : false,
       "indexedPrefiltersenable" : false,
       "resourcetypePrefiltersenable" : false,
       "alphabeticLanguagesSort" : true
     },
     "01BC_INST:Auto1.SearchTileInterface-Advanced.CentralIndex" : {
       "qtvinstance" : [ {
         "qtvid" : "01BC_INST:Auto1.searchbox_complex.CentralIndex"
       }, {
         "qtvid" : "01BC_INST:Auto1.mediaType.CentralIndex"
       }, {
         "qtvid" : "01BC_INST:Auto1.language.CentralIndex"
       }, {
         "qtvid" : "01BC_INST:Auto1.date_range.CentralIndex"
       }, {
         "qtvid" : "01BC_INST:Auto1.prescisionOperators.CentralIndex"
       } ],
       "prefiltersenable" : false,
       "indexedPrefiltersenable" : false,
       "resourcetypePrefiltersenable" : false,
       "alphabeticLanguagesSort" : true
     },
     "01BC_INST:Auto1.SearchTileInterface-Simple.Ebsco" : {
       "qtvinstance" : [ {
         "qtvid" : "01BC_INST:Auto1.searchbox_complex.Ebsco"
       }, {
         "qtvid" : "01BC_INST:Auto1.mediaType.Ebsco"
       }, {
         "qtvid" : "01BC_INST:Auto1.language.Ebsco"
       }, {
         "qtvid" : "01BC_INST:Auto1.date_range.Ebsco"
       }, {
         "qtvid" : "01BC_INST:Auto1.prescisionOperators.Ebsco"
       } ],
       "prefiltersenable" : false,
       "indexedPrefiltersenable" : false,
       "resourcetypePrefiltersenable" : false,
       "alphabeticLanguagesSort" : false
     },
     "01BC_INST:Auto1.SearchTileInterface-Advanced.LibraryCatalog" : {
       "qtvinstance" : [ {
         "qtvid" : "01BC_INST:Auto1.searchbox_complex.LibraryCatalog"
       }, {
         "qtvid" : "01BC_INST:Auto1.mediaType.LibraryCatalog"
       }, {
         "qtvid" : "01BC_INST:Auto1.language.LibraryCatalog"
       }, {
         "qtvid" : "01BC_INST:Auto1.date_range.LibraryCatalog"
       }, {
         "qtvid" : "01BC_INST:Auto1.prescisionOperators.LibraryCatalog"
       } ],
       "prefiltersenable" : false,
       "indexedPrefiltersenable" : false,
       "resourcetypePrefiltersenable" : false,
       "alphabeticLanguagesSort" : true
     },
     "01BC_INST:Auto1.SearchTileInterface-Simple.LibraryCatalog" : {
       "qtvinstance" : [ {
         "qtvid" : "01BC_INST:Auto1.searchbox_complex.LibraryCatalog"
       }, {
         "qtvid" : "01BC_INST:Auto1.mediaType.LibraryCatalog"
       }, {
         "qtvid" : "01BC_INST:Auto1.language.LibraryCatalog"
       }, {
         "qtvid" : "01BC_INST:Auto1.date_range.LibraryCatalog"
       }, {
         "qtvid" : "01BC_INST:Auto1.prescisionOperators.LibraryCatalog"
       } ],
       "prefiltersenable" : false,
       "indexedPrefiltersenable" : false,
       "resourcetypePrefiltersenable" : false,
       "alphabeticLanguagesSort" : false
     },
     "01BC_INST:Auto1.SearchTileInterface-Advanced.Ebsco" : {
       "qtvinstance" : [ {
         "qtvid" : "01BC_INST:Auto1.searchbox_complex.Ebsco"
       }, {
         "qtvid" : "01BC_INST:Auto1.mediaType.Ebsco"
       }, {
         "qtvid" : "01BC_INST:Auto1.language.Ebsco"
       }, {
         "qtvid" : "01BC_INST:Auto1.date_range.Ebsco"
       }, {
         "qtvid" : "01BC_INST:Auto1.prescisionOperators.Ebsco"
       } ],
       "prefiltersenable" : false,
       "indexedPrefiltersenable" : false,
       "resourcetypePrefiltersenable" : false,
       "alphabeticLanguagesSort" : true
     }
   },
   "ResultFullTileInterface" : {
     "01BC_INST:Auto1.ResultFullTileInterface.Ebsco" : {
       "eshelf" : false,
       "delimiter" : ";",
       "getitbutton" : false,
       "resultlinks" : [ {
         "links" : "linktorsrc,addlink,backlink,sourcerecord,"
       } ],
       "resultitemview" : [ {
         "items" : "title,vertitle",
         "displayInViewer" : true
       }, {
         "items" : "creator,contributor",
         "displayInViewer" : true
       }, {
         "items" : "ispartof",
         "displayInViewer" : true
       }, {
         "items" : "dissertation",
         "displayInViewer" : true
       }, {
         "items" : "subject",
         "displayInViewer" : true
       }, {
         "items" : "mesh",
         "displayInViewer" : true
       }, {
         "items" : "genre",
         "displayInViewer" : true
       }, {
         "items" : "description",
         "displayInViewer" : true
       }, {
         "items" : "contents",
         "displayInViewer" : true
       }, {
         "items" : "addtitle",
         "displayInViewer" : true
       }, {
         "items" : "relation",
         "displayInViewer" : true
       }, {
         "items" : "series",
         "displayInViewer" : true
       }, {
         "items" : "publisher",
         "displayInViewer" : true
       }, {
         "items" : "creationdate",
         "displayInViewer" : true
       }, {
         "items" : "edition",
         "displayInViewer" : true
       }, {
         "items" : "format",
         "displayInViewer" : true
       }, {
         "items" : "frequency",
         "displayInViewer" : true
       }, {
         "items" : "source",
         "displayInViewer" : true
       }, {
         "items" : "boundwith",
         "displayInViewer" : true
       } ],
       "authorityitemview" : [ {
         "items" : "heading",
         "displayInViewer" : true
       }, {
         "items" : "complex_reference",
         "displayInViewer" : true
       }, {
         "items" : "see_from_tracing",
         "displayInViewer" : true
       }, {
         "items" : "related_terms",
         "displayInViewer" : true
       }, {
         "items" : "source_data_found",
         "displayInViewer" : true
       }, {
         "items" : "source_data_not_found",
         "displayInViewer" : true
       }, {
         "items" : "biographical_or_historical_data",
         "displayInViewer" : true
       }, {
         "items" : "note",
         "displayInViewer" : true
       }, {
         "items" : "heading_linking_entry",
         "displayInViewer" : true
       }, {
         "items" : "other_standard_identifier",
         "displayInViewer" : true
       }, {
         "items" : "source_id",
         "displayInViewer" : true
       } ],
       "id" : "01BC_INST:Auto1.ResultFullTileInterface.Ebsco"
     },
     "01BC_INST:Auto1.ResultFullTileInterface.LibraryCatalog" : {
       "eshelf" : false,
       "delimiter" : ";",
       "getitbutton" : false,
       "resultlinks" : [ {
         "links" : "linktorsrc,addlink,backlink,sourcerecord,"
       } ],
       "resultitemview" : [ {
         "items" : "title,vertitle",
         "displayInViewer" : true
       }, {
         "items" : "creator,contributor",
         "displayInViewer" : true
       }, {
         "items" : "ispartof",
         "displayInViewer" : true
       }, {
         "items" : "dissertation",
         "displayInViewer" : true
       }, {
         "items" : "subject",
         "displayInViewer" : true
       }, {
         "items" : "mesh",
         "displayInViewer" : true
       }, {
         "items" : "genre",
         "displayInViewer" : true
       }, {
         "items" : "description",
         "displayInViewer" : true
       }, {
         "items" : "contents",
         "displayInViewer" : true
       }, {
         "items" : "addtitle",
         "displayInViewer" : true
       }, {
         "items" : "relation",
         "displayInViewer" : true
       }, {
         "items" : "series",
         "displayInViewer" : true
       }, {
         "items" : "publisher",
         "displayInViewer" : true
       }, {
         "items" : "creationdate",
         "displayInViewer" : true
       }, {
         "items" : "edition",
         "displayInViewer" : true
       }, {
         "items" : "format",
         "displayInViewer" : true
       }, {
         "items" : "frequency",
         "displayInViewer" : true
       }, {
         "items" : "source",
         "displayInViewer" : true
       }, {
         "items" : "boundwith",
         "displayInViewer" : true
       } ],
       "authorityitemview" : [ {
         "items" : "heading",
         "displayInViewer" : true
       }, {
         "items" : "complex_reference",
         "displayInViewer" : true
       }, {
         "items" : "see_from_tracing",
         "displayInViewer" : true
       }, {
         "items" : "related_terms",
         "displayInViewer" : true
       }, {
         "items" : "source_data_found",
         "displayInViewer" : true
       }, {
         "items" : "source_data_not_found",
         "displayInViewer" : true
       }, {
         "items" : "biographical_or_historical_data",
         "displayInViewer" : true
       }, {
         "items" : "note",
         "displayInViewer" : true
       }, {
         "items" : "heading_linking_entry",
         "displayInViewer" : true
       }, {
         "items" : "other_standard_identifier",
         "displayInViewer" : true
       }, {
         "items" : "source_id",
         "displayInViewer" : true
       } ],
       "id" : "01BC_INST:Auto1.ResultFullTileInterface.LibraryCatalog"
     },
     "01BC_INST:Auto1.ResultFullTileInterface.worldcat" : {
       "eshelf" : false,
       "delimiter" : ";",
       "getitbutton" : false,
       "resultlinks" : [ {
         "links" : "linktorsrc,addlink,backlink,sourcerecord,"
       } ],
       "resultitemview" : [ {
         "items" : "title,vertitle",
         "displayInViewer" : true
       }, {
         "items" : "creator,contributor",
         "displayInViewer" : true
       }, {
         "items" : "ispartof",
         "displayInViewer" : true
       }, {
         "items" : "dissertation",
         "displayInViewer" : true
       }, {
         "items" : "subject",
         "displayInViewer" : true
       }, {
         "items" : "mesh",
         "displayInViewer" : true
       }, {
         "items" : "genre",
         "displayInViewer" : true
       }, {
         "items" : "description",
         "displayInViewer" : true
       }, {
         "items" : "contents",
         "displayInViewer" : true
       }, {
         "items" : "addtitle",
         "displayInViewer" : true
       }, {
         "items" : "relation",
         "displayInViewer" : true
       }, {
         "items" : "series",
         "displayInViewer" : true
       }, {
         "items" : "publisher",
         "displayInViewer" : true
       }, {
         "items" : "creationdate",
         "displayInViewer" : true
       }, {
         "items" : "edition",
         "displayInViewer" : true
       }, {
         "items" : "format",
         "displayInViewer" : true
       }, {
         "items" : "frequency",
         "displayInViewer" : true
       }, {
         "items" : "source",
         "displayInViewer" : true
       }, {
         "items" : "boundwith",
         "displayInViewer" : true
       } ],
       "authorityitemview" : [ {
         "items" : "heading",
         "displayInViewer" : true
       }, {
         "items" : "complex_reference",
         "displayInViewer" : true
       }, {
         "items" : "see_from_tracing",
         "displayInViewer" : true
       }, {
         "items" : "related_terms",
         "displayInViewer" : true
       }, {
         "items" : "source_data_found",
         "displayInViewer" : true
       }, {
         "items" : "source_data_not_found",
         "displayInViewer" : true
       }, {
         "items" : "biographical_or_historical_data",
         "displayInViewer" : true
       }, {
         "items" : "note",
         "displayInViewer" : true
       }, {
         "items" : "heading_linking_entry",
         "displayInViewer" : true
       }, {
         "items" : "other_standard_identifier",
         "displayInViewer" : true
       }, {
         "items" : "source_id",
         "displayInViewer" : true
       } ],
       "id" : "01BC_INST:Auto1.ResultFullTileInterface.worldcat"
     },
     "01BC_INST:Auto1.ResultFullTileInterface.Everything" : {
       "eshelf" : false,
       "delimiter" : ";",
       "getitbutton" : false,
       "resultlinks" : [ {
         "links" : "linktorsrc,addlink,backlink,sourcerecord,"
       } ],
       "resultitemview" : [ {
         "items" : "title,vertitle",
         "displayInViewer" : true
       }, {
         "items" : "creator,contributor",
         "displayInViewer" : true
       }, {
         "items" : "ispartof",
         "displayInViewer" : true
       }, {
         "items" : "dissertation",
         "displayInViewer" : true
       }, {
         "items" : "subject",
         "displayInViewer" : true
       }, {
         "items" : "mesh",
         "displayInViewer" : true
       }, {
         "items" : "genre",
         "displayInViewer" : true
       }, {
         "items" : "description",
         "displayInViewer" : true
       }, {
         "items" : "contents",
         "displayInViewer" : true
       }, {
         "items" : "addtitle",
         "displayInViewer" : true
       }, {
         "items" : "relation",
         "displayInViewer" : true
       }, {
         "items" : "series",
         "displayInViewer" : true
       }, {
         "items" : "publisher",
         "displayInViewer" : true
       }, {
         "items" : "creationdate",
         "displayInViewer" : true
       }, {
         "items" : "edition",
         "displayInViewer" : true
       }, {
         "items" : "format",
         "displayInViewer" : true
       }, {
         "items" : "frequency",
         "displayInViewer" : true
       }, {
         "items" : "source",
         "displayInViewer" : true
       }, {
         "items" : "boundwith",
         "displayInViewer" : true
       } ],
       "authorityitemview" : [ {
         "items" : "heading",
         "displayInViewer" : true
       }, {
         "items" : "complex_reference",
         "displayInViewer" : true
       }, {
         "items" : "see_from_tracing",
         "displayInViewer" : true
       }, {
         "items" : "related_terms",
         "displayInViewer" : true
       }, {
         "items" : "source_data_found",
         "displayInViewer" : true
       }, {
         "items" : "source_data_not_found",
         "displayInViewer" : true
       }, {
         "items" : "biographical_or_historical_data",
         "displayInViewer" : true
       }, {
         "items" : "note",
         "displayInViewer" : true
       }, {
         "items" : "heading_linking_entry",
         "displayInViewer" : true
       }, {
         "items" : "other_standard_identifier",
         "displayInViewer" : true
       }, {
         "items" : "source_id",
         "displayInViewer" : true
       } ],
       "id" : "01BC_INST:Auto1.ResultFullTileInterface.Everything"
     },
     "01BC_INST:Auto1.ResultFullTileInterface.CentralIndex" : {
       "eshelf" : false,
       "delimiter" : ";",
       "getitbutton" : false,
       "resultlinks" : [ {
         "links" : "linktorsrc,addlink,backlink,sourcerecord,"
       } ],
       "resultitemview" : [ {
         "items" : "title,vertitle",
         "displayInViewer" : true
       }, {
         "items" : "creator,contributor",
         "displayInViewer" : true
       }, {
         "items" : "ispartof",
         "displayInViewer" : true
       }, {
         "items" : "dissertation",
         "displayInViewer" : true
       }, {
         "items" : "subject",
         "displayInViewer" : true
       }, {
         "items" : "mesh",
         "displayInViewer" : true
       }, {
         "items" : "genre",
         "displayInViewer" : true
       }, {
         "items" : "description",
         "displayInViewer" : true
       }, {
         "items" : "contents",
         "displayInViewer" : true
       }, {
         "items" : "addtitle",
         "displayInViewer" : true
       }, {
         "items" : "relation",
         "displayInViewer" : true
       }, {
         "items" : "series",
         "displayInViewer" : true
       }, {
         "items" : "publisher",
         "displayInViewer" : true
       }, {
         "items" : "creationdate",
         "displayInViewer" : true
       }, {
         "items" : "edition",
         "displayInViewer" : true
       }, {
         "items" : "format",
         "displayInViewer" : true
       }, {
         "items" : "frequency",
         "displayInViewer" : true
       }, {
         "items" : "source",
         "displayInViewer" : true
       }, {
         "items" : "boundwith",
         "displayInViewer" : true
       } ],
       "authorityitemview" : [ {
         "items" : "heading",
         "displayInViewer" : true
       }, {
         "items" : "complex_reference",
         "displayInViewer" : true
       }, {
         "items" : "see_from_tracing",
         "displayInViewer" : true
       }, {
         "items" : "related_terms",
         "displayInViewer" : true
       }, {
         "items" : "source_data_found",
         "displayInViewer" : true
       }, {
         "items" : "source_data_not_found",
         "displayInViewer" : true
       }, {
         "items" : "biographical_or_historical_data",
         "displayInViewer" : true
       }, {
         "items" : "note",
         "displayInViewer" : true
       }, {
         "items" : "heading_linking_entry",
         "displayInViewer" : true
       }, {
         "items" : "other_standard_identifier",
         "displayInViewer" : true
       }, {
         "items" : "source_id",
         "displayInViewer" : true
       } ],
       "id" : "01BC_INST:Auto1.ResultFullTileInterface.CentralIndex"
     },
     "01BC_INST:Auto1.ResultFullTileInterface.jsearch_slot" : {
       "eshelf" : false,
       "delimiter" : ";",
       "getitbutton" : false,
       "resultlinks" : [ {
         "links" : "linktorsrc,addlink,backlink,sourcerecord,"
       } ],
       "resultitemview" : [ {
         "items" : "title,vertitle",
         "displayInViewer" : true
       }, {
         "items" : "creator,contributor",
         "displayInViewer" : true
       }, {
         "items" : "ispartof",
         "displayInViewer" : true
       }, {
         "items" : "dissertation",
         "displayInViewer" : true
       }, {
         "items" : "subject",
         "displayInViewer" : true
       }, {
         "items" : "mesh",
         "displayInViewer" : true
       }, {
         "items" : "genre",
         "displayInViewer" : true
       }, {
         "items" : "description",
         "displayInViewer" : true
       }, {
         "items" : "contents",
         "displayInViewer" : true
       }, {
         "items" : "addtitle",
         "displayInViewer" : true
       }, {
         "items" : "relation",
         "displayInViewer" : true
       }, {
         "items" : "series",
         "displayInViewer" : true
       }, {
         "items" : "publisher",
         "displayInViewer" : true
       }, {
         "items" : "creationdate",
         "displayInViewer" : true
       }, {
         "items" : "edition",
         "displayInViewer" : true
       }, {
         "items" : "format",
         "displayInViewer" : true
       }, {
         "items" : "frequency",
         "displayInViewer" : true
       }, {
         "items" : "source",
         "displayInViewer" : true
       }, {
         "items" : "boundwith",
         "displayInViewer" : true
       } ],
       "authorityitemview" : [ {
         "items" : "heading",
         "displayInViewer" : true
       }, {
         "items" : "complex_reference",
         "displayInViewer" : true
       }, {
         "items" : "see_from_tracing",
         "displayInViewer" : true
       }, {
         "items" : "related_terms",
         "displayInViewer" : true
       }, {
         "items" : "source_data_found",
         "displayInViewer" : true
       }, {
         "items" : "source_data_not_found",
         "displayInViewer" : true
       }, {
         "items" : "biographical_or_historical_data",
         "displayInViewer" : true
       }, {
         "items" : "note",
         "displayInViewer" : true
       }, {
         "items" : "heading_linking_entry",
         "displayInViewer" : true
       }, {
         "items" : "other_standard_identifier",
         "displayInViewer" : true
       }, {
         "items" : "source_id",
         "displayInViewer" : true
       } ],
       "id" : "01BC_INST:Auto1.ResultFullTileInterface.jsearch_slot"
     }
   },
   "ResultTileInterface" : {
     "01BC_INST:Auto1.ResultTileInterface.worldcat" : {
       "ilsapi" : false,
       "bulksize" : 2,
       "eshelf" : true,
       "showsnip" : true,
       "resultview" : [ {
         "items" : "crsinfo,title,vertitle",
         "delimiter" : "; "
       }, {
         "items" : "creator,contributor",
         "delimiter" : "; "
       }, {
         "items" : "creationdate",
         "delimiter" : "; "
       }, {
         "items" : "ispartof,format,crsinfo",
         "delimiter" : "; "
       } ],
       "facebookenabled" : false,
       "linkabletitle" : "2",
       "sortby" : "rank,date_d,date_a,title,author",
       "frbrdisplay" : 0,
       "frbrsortby" : "date_d",
       "tabsorder" : {
         "items" : "searchWithinJournal,quickAccess,getit_link1,esploroUsage,details,recommendations,tags,browseshelf,links,,moreFromTheSame,mayAlsoBeFoundAt,citations,timesCited"
       },
       "getall" : false,
       "showsnipifnotfound" : true,
       "boostinst" : false,
       "numofresults" : 10,
       "id" : "01BC_INST:Auto1.ResultTileInterface.worldcat",
       "displaysigninmsg" : true,
       "groupmessage" : 0
     },
     "01BC_INST:Auto1.ResultTileInterfaceFrbrGeneric.Everything" : {
       "ilsapi" : false,
       "bulksize" : 2,
       "eshelf" : true,
       "showsnip" : true,
       "resultview" : [ {
         "items" : "vertitle,title",
         "delimiter" : ";"
       }, {
         "items" : "creator,contributor",
         "delimiter" : ";"
       } ],
       "facebookenabled" : false,
       "linkabletitle" : "2",
       "sortby" : "rank,date_d,date_a,title,author",
       "frbrdisplay" : 1,
       "frbrsortby" : "date_d",
       "tabsorder" : {
         "items" : "searchWithinJournal,quickAccess,getit_link1,esploroUsage,details,recommendations,tags,browseshelf,links,,moreFromTheSame,mayAlsoBeFoundAt,citations,timesCited"
       },
       "getall" : false,
       "showsnipifnotfound" : true,
       "boostinst" : false,
       "numofresults" : 10,
       "id" : "01BC_INST:Auto1.ResultTileInterfaceFrbrGeneric.Everything",
       "displaysigninmsg" : true,
       "groupmessage" : 0
     },
     "01BC_INST:Auto1.ResultTileInterfaceFrbrGeneric.worldcat" : {
       "ilsapi" : false,
       "bulksize" : 2,
       "eshelf" : true,
       "showsnip" : true,
       "resultview" : [ {
         "items" : "vertitle,title",
         "delimiter" : ";"
       }, {
         "items" : "creator,contributor",
         "delimiter" : ";"
       } ],
       "facebookenabled" : false,
       "linkabletitle" : "2",
       "sortby" : "rank,date_d,date_a,title,author",
       "frbrdisplay" : 1,
       "frbrsortby" : "date_d",
       "tabsorder" : {
         "items" : "searchWithinJournal,quickAccess,getit_link1,esploroUsage,details,recommendations,tags,browseshelf,links,,moreFromTheSame,mayAlsoBeFoundAt,citations,timesCited"
       },
       "getall" : false,
       "showsnipifnotfound" : true,
       "boostinst" : false,
       "numofresults" : 10,
       "id" : "01BC_INST:Auto1.ResultTileInterfaceFrbrGeneric.worldcat",
       "displaysigninmsg" : true,
       "groupmessage" : 0
     },
     "01BC_INST:Auto1.ResultTileInterfaceFrbrGeneric.Ebsco" : {
       "ilsapi" : false,
       "bulksize" : 2,
       "eshelf" : true,
       "showsnip" : true,
       "resultview" : [ {
         "items" : "vertitle,title",
         "delimiter" : ";"
       }, {
         "items" : "creator,contributor",
         "delimiter" : ";"
       } ],
       "facebookenabled" : false,
       "linkabletitle" : "2",
       "sortby" : "rank,date_d,date_a,title,author",
       "frbrdisplay" : 1,
       "frbrsortby" : "date_d",
       "tabsorder" : {
         "items" : "searchWithinJournal,quickAccess,getit_link1,esploroUsage,details,recommendations,tags,browseshelf,links,,moreFromTheSame,mayAlsoBeFoundAt,citations,timesCited"
       },
       "getall" : false,
       "showsnipifnotfound" : true,
       "boostinst" : false,
       "numofresults" : 10,
       "id" : "01BC_INST:Auto1.ResultTileInterfaceFrbrGeneric.Ebsco",
       "displaysigninmsg" : true,
       "groupmessage" : 0
     },
     "01BC_INST:Auto1.ResultTileInterface.Everything" : {
       "ilsapi" : false,
       "bulksize" : 2,
       "eshelf" : true,
       "showsnip" : true,
       "resultview" : [ {
         "items" : "crsinfo,title,vertitle",
         "delimiter" : "; "
       }, {
         "items" : "creator,contributor",
         "delimiter" : "; "
       }, {
         "items" : "creationdate",
         "delimiter" : "; "
       }, {
         "items" : "ispartof,format,crsinfo",
         "delimiter" : "; "
       } ],
       "facebookenabled" : false,
       "linkabletitle" : "2",
       "sortby" : "rank,date_d,date_a,title,author",
       "frbrdisplay" : 0,
       "frbrsortby" : "date_d",
       "tabsorder" : {
         "items" : "searchWithinJournal,quickAccess,getit_link1,esploroUsage,details,recommendations,tags,browseshelf,links,,moreFromTheSame,mayAlsoBeFoundAt,citations,timesCited"
       },
       "getall" : false,
       "showsnipifnotfound" : true,
       "boostinst" : false,
       "numofresults" : 10,
       "id" : "01BC_INST:Auto1.ResultTileInterface.Everything",
       "displaysigninmsg" : true,
       "groupmessage" : 0
     },
     "01BC_INST:Auto1.ResultTileInterfaceFrbrGeneric.CentralIndex" : {
       "ilsapi" : false,
       "bulksize" : 2,
       "eshelf" : true,
       "showsnip" : true,
       "resultview" : [ {
         "items" : "vertitle,title",
         "delimiter" : ";"
       }, {
         "items" : "creator,contributor",
         "delimiter" : ";"
       } ],
       "facebookenabled" : false,
       "linkabletitle" : "2",
       "sortby" : "rank,date_d,date_a,title,author",
       "frbrdisplay" : 1,
       "frbrsortby" : "date_d",
       "tabsorder" : {
         "items" : "searchWithinJournal,quickAccess,getit_link1,esploroUsage,details,recommendations,tags,browseshelf,links,,moreFromTheSame,mayAlsoBeFoundAt,citations,timesCited"
       },
       "getall" : false,
       "showsnipifnotfound" : true,
       "boostinst" : false,
       "numofresults" : 10,
       "id" : "01BC_INST:Auto1.ResultTileInterfaceFrbrGeneric.CentralIndex",
       "displaysigninmsg" : true,
       "groupmessage" : 0
     },
     "01BC_INST:Auto1.ResultTileInterface.Ebsco" : {
       "ilsapi" : false,
       "bulksize" : 2,
       "eshelf" : true,
       "showsnip" : true,
       "resultview" : [ {
         "items" : "crsinfo,title,vertitle",
         "delimiter" : "; "
       }, {
         "items" : "creator,contributor",
         "delimiter" : "; "
       }, {
         "items" : "creationdate",
         "delimiter" : "; "
       }, {
         "items" : "ispartof,format,crsinfo",
         "delimiter" : "; "
       } ],
       "facebookenabled" : false,
       "linkabletitle" : "2",
       "sortby" : "rank,date_d,date_a,title,author",
       "frbrdisplay" : 0,
       "frbrsortby" : "date_d",
       "tabsorder" : {
         "items" : "searchWithinJournal,quickAccess,getit_link1,esploroUsage,details,recommendations,tags,browseshelf,links,,moreFromTheSame,mayAlsoBeFoundAt,citations,timesCited"
       },
       "getall" : false,
       "showsnipifnotfound" : true,
       "boostinst" : false,
       "numofresults" : 10,
       "id" : "01BC_INST:Auto1.ResultTileInterface.Ebsco",
       "displaysigninmsg" : true,
       "groupmessage" : 0
     },
     "01BC_INST:Auto1.ResultTileInterfaceFrbrGeneric.LibraryCatalog" : {
       "ilsapi" : false,
       "bulksize" : 2,
       "eshelf" : true,
       "showsnip" : true,
       "resultview" : [ {
         "items" : "vertitle,title",
         "delimiter" : ";"
       }, {
         "items" : "creator,contributor",
         "delimiter" : ";"
       } ],
       "facebookenabled" : false,
       "linkabletitle" : "2",
       "sortby" : "rank,date_d,date_a,title,author",
       "frbrdisplay" : 1,
       "frbrsortby" : "date_d",
       "tabsorder" : {
         "items" : "searchWithinJournal,quickAccess,getit_link1,esploroUsage,details,recommendations,tags,browseshelf,links,,moreFromTheSame,mayAlsoBeFoundAt,citations,timesCited"
       },
       "getall" : false,
       "showsnipifnotfound" : true,
       "boostinst" : false,
       "numofresults" : 10,
       "id" : "01BC_INST:Auto1.ResultTileInterfaceFrbrGeneric.LibraryCatalog",
       "displaysigninmsg" : true,
       "groupmessage" : 0
     },
     "01BC_INST:Auto1.ResultTileInterface.CentralIndex" : {
       "ilsapi" : false,
       "bulksize" : 2,
       "eshelf" : true,
       "showsnip" : true,
       "resultview" : [ {
         "items" : "crsinfo,title,vertitle",
         "delimiter" : "; "
       }, {
         "items" : "creator,contributor",
         "delimiter" : "; "
       }, {
         "items" : "creationdate",
         "delimiter" : "; "
       }, {
         "items" : "ispartof,format,crsinfo",
         "delimiter" : "; "
       } ],
       "facebookenabled" : false,
       "linkabletitle" : "2",
       "sortby" : "rank,date_d,date_a,title,author",
       "frbrdisplay" : 0,
       "frbrsortby" : "date_d",
       "tabsorder" : {
         "items" : "searchWithinJournal,quickAccess,getit_link1,esploroUsage,details,recommendations,tags,browseshelf,links,,moreFromTheSame,mayAlsoBeFoundAt,citations,timesCited"
       },
       "getall" : false,
       "showsnipifnotfound" : true,
       "boostinst" : false,
       "numofresults" : 10,
       "id" : "01BC_INST:Auto1.ResultTileInterface.CentralIndex",
       "displaysigninmsg" : true,
       "groupmessage" : 0
     },
     "01BC_INST:Auto1.ResultTileInterface.jsearch_slot" : {
       "ilsapi" : false,
       "bulksize" : 2,
       "eshelf" : true,
       "showsnip" : true,
       "resultview" : [ {
         "items" : "crsinfo,title,vertitle",
         "delimiter" : "; "
       }, {
         "items" : "creator,contributor",
         "delimiter" : "; "
       }, {
         "items" : "creationdate",
         "delimiter" : "; "
       }, {
         "items" : "ispartof,format,crsinfo",
         "delimiter" : "; "
       } ],
       "facebookenabled" : false,
       "linkabletitle" : "2",
       "sortby" : "title,rank",
       "frbrdisplay" : 0,
       "frbrsortby" : "date_d",
       "tabsorder" : {
         "items" : "searchWithinJournal,quickAccess,getit_link1,esploroUsage,details,recommendations,tags,browseshelf,links,,moreFromTheSame,mayAlsoBeFoundAt,citations,timesCited"
       },
       "getall" : false,
       "showsnipifnotfound" : true,
       "boostinst" : false,
       "numofresults" : 10,
       "id" : "01BC_INST:Auto1.ResultTileInterface.jsearch_slot",
       "displaysigninmsg" : true,
       "groupmessage" : 0
     },
     "01BC_INST:Auto1.ResultTileInterface.LibraryCatalog" : {
       "ilsapi" : false,
       "bulksize" : 2,
       "eshelf" : true,
       "showsnip" : true,
       "resultview" : [ {
         "items" : "crsinfo,title,vertitle",
         "delimiter" : "; "
       }, {
         "items" : "creator,contributor",
         "delimiter" : "; "
       }, {
         "items" : "creationdate",
         "delimiter" : "; "
       }, {
         "items" : "ispartof,format,crsinfo",
         "delimiter" : "; "
       } ],
       "facebookenabled" : false,
       "linkabletitle" : "2",
       "sortby" : "rank,date_d,date_a,title,author",
       "frbrdisplay" : 0,
       "frbrsortby" : "date_d",
       "tabsorder" : {
         "items" : "searchWithinJournal,quickAccess,getit_link1,esploroUsage,details,recommendations,tags,browseshelf,links,,moreFromTheSame,mayAlsoBeFoundAt,citations,timesCited"
       },
       "getall" : false,
       "showsnipifnotfound" : true,
       "boostinst" : false,
       "numofresults" : 10,
       "id" : "01BC_INST:Auto1.ResultTileInterface.LibraryCatalog",
       "displaysigninmsg" : true,
       "groupmessage" : 0
     },
     "01BC_INST:Auto1.ResultTileInterfaceFrbrGeneric.jsearch_slot" : {
       "ilsapi" : false,
       "bulksize" : 2,
       "eshelf" : true,
       "showsnip" : true,
       "resultview" : [ {
         "items" : "vertitle,title",
         "delimiter" : ";"
       }, {
         "items" : "creator,contributor",
         "delimiter" : ";"
       } ],
       "facebookenabled" : false,
       "linkabletitle" : "2",
       "sortby" : "title,rank",
       "frbrdisplay" : 1,
       "frbrsortby" : "date_d",
       "tabsorder" : {
         "items" : "searchWithinJournal,quickAccess,getit_link1,esploroUsage,details,recommendations,tags,browseshelf,links,,moreFromTheSame,mayAlsoBeFoundAt,citations,timesCited"
       },
       "getall" : false,
       "showsnipifnotfound" : true,
       "boostinst" : false,
       "numofresults" : 10,
       "id" : "01BC_INST:Auto1.ResultTileInterfaceFrbrGeneric.jsearch_slot",
       "displaysigninmsg" : true,
       "groupmessage" : 0
     }
   },
   "LocationsTileInterface" : {
     "01BC_INST:Auto1.LocationsTileInterface.Everything" : {
       "viewinstsort" : false,
       "rta" : "none",
       "displayholdingsfilters" : true,
       "filtersop" : "all_filters",
       "instsort" : false,
       "id" : "01BC_INST:Auto1.LocationsTileInterface.Everything"
     },
     "01BC_INST:Auto1.LocationsTileInterface.jsearch_slot" : {
       "viewinstsort" : false,
       "rta" : "none",
       "displayholdingsfilters" : true,
       "filtersop" : "all_filters",
       "instsort" : false,
       "id" : "01BC_INST:Auto1.LocationsTileInterface.jsearch_slot"
     },
     "01BC_INST:Auto1.LocationsTileInterface.CentralIndex" : {
       "viewinstsort" : false,
       "rta" : "none",
       "displayholdingsfilters" : true,
       "filtersop" : "all_filters",
       "instsort" : false,
       "id" : "01BC_INST:Auto1.LocationsTileInterface.CentralIndex"
     },
     "01BC_INST:Auto1.LocationsTileInterface.Ebsco" : {
       "viewinstsort" : false,
       "rta" : "none",
       "displayholdingsfilters" : true,
       "filtersop" : "all_filters",
       "instsort" : false,
       "id" : "01BC_INST:Auto1.LocationsTileInterface.Ebsco"
     },
     "01BC_INST:Auto1.LocationsTileInterface.worldcat" : {
       "viewinstsort" : false,
       "rta" : "none",
       "displayholdingsfilters" : true,
       "filtersop" : "all_filters",
       "instsort" : false,
       "id" : "01BC_INST:Auto1.LocationsTileInterface.worldcat"
     },
     "01BC_INST:Auto1.LocationsTileInterface.LibraryCatalog" : {
       "viewinstsort" : false,
       "rta" : "none",
       "displayholdingsfilters" : true,
       "filtersop" : "all_filters",
       "instsort" : false,
       "id" : "01BC_INST:Auto1.LocationsTileInterface.LibraryCatalog"
     }
   }
 },
 "system-configuration" : {
   "Session Timeout" : "30",
   "Auto_Complete_Server_URL" : "https://primo-instant-apac.hosted.exlibrisgroup.com",
   "FE UI - Scrolling Threshold" : "10",
   "Auto_Complete_Feature_Enabled" : "true",
   "Use local fields 30-39 as lateral links" : "Y",
   "manualAlternativeEmailRS" : false,
   "showICPLicenseFooter" : "false",
   "GATHER_SEARCH_STAT" : "N",
   "GATHER_PAGE_STAT" : "N",
   "Show More (replaces scrolling) Threshold" : "50",
   "RUM_URL" : "http://il-beacon01.corp.exlibrisgroup.com:8080/boom/apache_pb.gif",
   "Alma_Version" : "July 2024",
   "disable_cache" : false,
   "skip_delivery" : true,
   "skip_delivery_for_collection_discovery" : true,
   "skip_relations_delivery" : false,
   "split_mms_query" : false,
   "split_facets_max_wait" : 10000,
   "split_facets_wait_interval" : 1500,
   "Proxy_Server" : "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/",
   "Show ICP License Footer" : "false",
   "request item availability check timeout" : "3",
   "hostLB" : "http://il-urmsand01.corp.exlibrisgroup.com:1801/",
   "unionViewScopeSuffix" : "_UCV",
   "ngrs_enabled" : false,
   "ngrs_implementation_mode" : false,
   "cdi_enable_global_title_catalog" : false,
   "ngrs_enable_best_offer_local_records" : false,
   "ngrs_pickup_anywhere" : false,
   "rapido_SA_rapidill_mode" : false,
   "rapido_lender_supply_directly_to_patron" : false,
   "activeAccessModelEnabled" : false,
   "number_of_representations" : "5",
   "use_facet_in_creator_hyperlink" : true,
   "tmp_enable_results_per_page" : true,
   "number_of_results_per_page_series" : "10,25,50",
   "activate_suspend_watchers_for_browser" : "ALL",
   "disable_suspend_watchers_for_x_results" : "20",
   "rapido_hide_how_to_get_it_section" : false,
   "delivery_bulk_from_brief" : true,
   "brief_results_journal_coverage" : true,
   "view_it_show_all_results" : false,
   "show_researcher_assistant_by_icon" : false,
   "show_researcher_assistant_by_widget" : false,
   "facet_alphanumeric_icelandic_sort" : false,
   "use_expanded_db_label" : true,
   "use_rapido_functionality" : false,
   "allow_self_registration" : false,
   "hide_rapido_expand_link_map" : {
     "Everything" : false,
     "CentralIndex" : false,
     "Ebsco" : false,
     "CourseReserves" : false,
     "worldcat" : false,
     "LibraryCatalog" : false
   },
   "subjects_alphabetical_sort_fullDisplay" : false,
   "Activate Captcha [Y/N]" : "N",
   "Public Captcha Key" : "",
   "async_brief_result_delivery" : true,
   "display_holdings_without_waiting" : false,
   "enable_direct_linking_in_record_full_view" : false,
   "hide_rapido_offers_tiles" : true,
   "rapido_hide_section_when_user_not_logged_in" : false,
   "rapido_hide_get_it_user_groups" : { },
   "default_user_search_history_off" : false,
   "equals_search_operator_hypertext_linking_enabled" : true,
   "equals_search_operator_hypertext_linking_enabled_title_field" : true,
   "equals_search_operator_hypertext_linking_enabled_author_field" : true,
   "equals_search_operator_hypertext_linking_enabled_subject_field" : true,
   "allow_start_with_for_call_number" : false,
   "allow_activity_on_transferred_finesfees" : false,
   "display_person_info_card" : false,
   "enable_person_entity_autocomplete" : false,
   "person_entity_autocomplete_server_url" : "https://api.summon.serialssolutions.com/eautocomplete/person",
   "primoVE_remove_duplicate_records_in_virtual_browse" : false,
   "rapido_show_physical_journal_offer" : false,
   "direct_login_transfer_all_parameters" : false,
   "default_sort_newspaper_by_date_newest" : false,
   "primo_ve_enable_browse_search_paging" : true,
   "alphabetical_sort_pickup_inst_lib" : true,
   "primoVE_my_account_number_of_requests" : "200",
   "display_location_level_in_getIt_single_location" : false,
   "nde_number_of_services_to_display_view_it" : "3",
   "exhibitions_creator" : false,
   "display_sms_wanted" : false,
   "auto_switch_quicklinks" : true,
   "request_default_format" : "PHYSICAL",
   "request_it_enabled" : false
 },
 "mapping-tables" : {
   "Citation Linker Definitions" : [ {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "atitle",
     "source3" : "default",
     "source4" : "1"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "jtitle",
     "source3" : "default",
     "source4" : "2"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "date",
     "source3" : "default",
     "source4" : "3"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "volume",
     "source3" : "default",
     "source4" : "4"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "issue",
     "source3" : "default",
     "source4" : "5"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "spage",
     "source3" : "default",
     "source4" : "6"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "epage",
     "source3" : "default",
     "source4" : "7"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "issn",
     "source3" : "default",
     "source4" : "8"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "doi",
     "source3" : "default",
     "source4" : "9"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "pmid",
     "source3" : "default",
     "source4" : "10"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "aulast",
     "source3" : "default",
     "source4" : "11"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "aufirst",
     "source3" : "default",
     "source4" : "12"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "auinit",
     "source3" : "default",
     "source4" : "13"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "publisher",
     "source3" : "default",
     "source4" : "14"
   }, {
     "target" : "Yes",
     "source1" : "article",
     "source2" : "pubdate",
     "source3" : "default",
     "source4" : "15"
   }, {
     "target" : "Yes",
     "source1" : "book",
     "source2" : "btitle",
     "source3" : "default",
     "source4" : "22"
   }, {
     "target" : "Yes",
     "source1" : "book",
     "source2" : "date",
     "source3" : "default",
     "source4" : "23"
   }, {
     "target" : "Yes",
     "source1" : "book",
     "source2" : "volume",
     "source3" : "default",
     "source4" : "24"
   }, {
     "target" : "Yes",
     "source1" : "book",
     "source2" : "part",
     "source3" : "default",
     "source4" : "25"
   }, {
     "target" : "Yes",
     "source1" : "book",
     "source2" : "isbn",
     "source3" : "default",
     "source4" : "26"
   }, {
     "target" : "Yes",
     "source1" : "book",
     "source2" : "aulast",
     "source3" : "default",
     "source4" : "27"
   }, {
     "target" : "Yes",
     "source1" : "book",
     "source2" : "aufirst",
     "source3" : "default",
     "source4" : "28"
   }, {
     "target" : "Yes",
     "source1" : "book",
     "source2" : "auinit",
     "source3" : "default",
     "source4" : "29"
   }, {
     "target" : "Yes",
     "source1" : "book",
     "source2" : "publisher",
     "source3" : "default",
     "source4" : "30"
   }, {
     "target" : "Yes",
     "source1" : "book",
     "source2" : "pubdate",
     "source3" : "default",
     "source4" : "31"
   }, {
     "target" : "Yes",
     "source1" : "journal",
     "source2" : "jtitle",
     "source3" : "default",
     "source4" : "16"
   }, {
     "target" : "Yes",
     "source1" : "journal",
     "source2" : "date",
     "source3" : "default",
     "source4" : "17"
   }, {
     "target" : "Yes",
     "source1" : "journal",
     "source2" : "volume",
     "source3" : "default",
     "source4" : "18"
   }, {
     "target" : "Yes",
     "source1" : "journal",
     "source2" : "issue",
     "source3" : "default",
     "source4" : "19"
   }, {
     "target" : "Yes",
     "source1" : "journal",
     "source2" : "issn",
     "source3" : "default",
     "source4" : "20"
   }, {
     "target" : "Yes",
     "source1" : "journal",
     "source2" : "doi",
     "source3" : "default",
     "source4" : "21"
   } ],
   "Request (Hold and Booking) Optional Parameters" : [ {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "comment",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "materialType",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "postalCode",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "notNeedAfter",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "termsOfUse",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "checkAvailiability",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "calculateQueueButton",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "chapterArticleTitle",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "chapterArticleAuthor",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "startPage",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "endPage",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "volume",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "issue",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "part",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "publicationDate",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "manualDescription",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "genericCheckBox",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "formDescription",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "addressLine1",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "addressLine2",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "addressLine3",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "addressLine4",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "city",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "stateProvince",
     "source5" : "false"
   } ],
   "Prima Direct Login To Other Institutions" : [ ],
   "Library Level List" : [ {
     "target" : "Y",
     "source1" : "Group The Locations Under Get It By The Library Name"
   } ],
   "Personalize Your Results Disciplines Fields" : [ {
     "target" : "sociology",
     "source1" : "default",
     "source2" : "social_sciences"
   }, {
     "target" : "veterinary_medicine",
     "source1" : "default"
   }, {
     "target" : "anthropology",
     "source1" : "default",
     "source2" : "social_sciences"
   }, {
     "target" : "arts_humanities",
     "source1" : "default"
   }, {
     "target" : "biology",
     "source1" : "default",
     "source2" : "sciences"
   }, {
     "target" : "business_economics",
     "source1" : "default"
   }, {
     "target" : "chemistry",
     "source1" : "default",
     "source2" : "sciences"
   }, {
     "target" : "computer_science",
     "source1" : "default",
     "source2" : "engineering"
   }, {
     "target" : "geography",
     "source1" : "default",
     "source2" : "social_sciences"
   }, {
     "target" : "earth_sciences",
     "source1" : "default",
     "source2" : "sciences"
   }, {
     "target" : "education",
     "source1" : "default",
     "source2" : "social_sciences"
   }, {
     "target" : "engineering",
     "source1" : "default"
   }, {
     "target" : "languages_literature",
     "source1" : "default",
     "source2" : "arts_humanities"
   }, {
     "target" : "law",
     "source1" : "default"
   }, {
     "target" : "library_information_science",
     "source1" : "default"
   }, {
     "target" : "mathematics",
     "source1" : "default",
     "source2" : "sciences"
   }, {
     "target" : "medicine",
     "source1" : "default"
   }, {
     "target" : "nursing",
     "source1" : "default"
   }, {
     "target" : "agriculture_forestry",
     "source1" : "default"
   }, {
     "target" : "pharmacy_therapeutics_pharmacology",
     "source1" : "default",
     "source2" : "medicine"
   }, {
     "target" : "philosophy_religion",
     "source1" : "default",
     "source2" : "arts_humanities"
   }, {
     "target" : "physics",
     "source1" : "default"
   }, {
     "target" : "political_sciences",
     "source1" : "default",
     "source2" : "social_sciences"
   }, {
     "target" : "psychology",
     "source1" : "default"
   }, {
     "target" : "public_health",
     "source1" : "default",
     "source2" : "social_sciences"
   }, {
     "target" : "sciences",
     "source1" : "default"
   }, {
     "target" : "social_sciences",
     "source1" : "default"
   }, {
     "target" : "history_archaeology",
     "source1" : "default",
     "source2" : "arts_humanities"
   }, {
     "target" : "diet_clinical_nutrition",
     "source1" : "default",
     "source2" : "medicine"
   }, {
     "target" : "journalism_communications",
     "source1" : "default",
     "source2" : "social_sciences"
   }, {
     "target" : "materials_science",
     "source1" : "default",
     "source2" : "engineering"
   }, {
     "target" : "statistics",
     "source1" : "default"
   } ],
   "Personal Setting Fields" : [ {
     "target" : "address_1",
     "source1" : "contact.address_1",
     "source2" : "1",
     "source3" : "default"
   }, {
     "target" : "address_2",
     "source1" : "contact.address_2",
     "source2" : "2",
     "source3" : "default"
   }, {
     "target" : "address_3",
     "source1" : "contact.address_3",
     "source2" : "3",
     "source3" : "default"
   }, {
     "target" : "address_4",
     "source1" : "contact.address_4",
     "source2" : "4",
     "source3" : "default"
   }, {
     "target" : "address_5",
     "source1" : "contact.address_5",
     "source2" : "5",
     "source3" : "default"
   }, {
     "target" : "city",
     "source1" : "contact.city",
     "source2" : "6",
     "source3" : "default"
   }, {
     "target" : "state",
     "source1" : "contact.state",
     "source2" : "7",
     "source3" : "default"
   }, {
     "target" : "country",
     "source1" : "contact.country",
     "source2" : "27",
     "source3" : "default"
   }, {
     "target" : "telephone_1",
     "source1" : "contact.telephone_1",
     "source2" : "11",
     "source3" : "default"
   }, {
     "target" : "telephone_2",
     "source1" : "contact.telephone_2",
     "source2" : "12",
     "source3" : "default"
   }, {
     "target" : "telephone_3",
     "source1" : "contact.telephone_3",
     "source2" : "13",
     "source3" : "default"
   }, {
     "target" : "telephone_4",
     "source1" : "contact.telephone_4",
     "source2" : "14",
     "source3" : "default"
   }, {
     "target" : "sms_authorized",
     "source1" : "contact.sms_authorized",
     "source2" : "16",
     "source3" : "default"
   }, {
     "target" : "mail_attachement",
     "source1" : "contact.mail_attachment",
     "source2" : "18",
     "source3" : "default"
   }, {
     "target" : "pincode",
     "source1" : "contact.pincode",
     "source2" : "20",
     "source3" : "default"
   }, {
     "target" : "old_password",
     "source1" : "contact.oldPassword",
     "source2" : "21",
     "source3" : "default"
   }, {
     "target" : "new_password",
     "source1" : "contact.newPassword",
     "source2" : "22",
     "source3" : "default"
   }, {
     "target" : "my_email",
     "source1" : "contact.my_email",
     "source2" : "23",
     "source3" : "default"
   }, {
     "target" : "sms_number",
     "source1" : "contact.sms_number",
     "source2" : "24",
     "source3" : "default"
   }, {
     "target" : "zip",
     "source1" : "contact.zip",
     "source2" : "8",
     "source3" : "default"
   }, {
     "target" : "address_valid_from",
     "source1" : "contact.address_valid_from",
     "source2" : "9",
     "source3" : "default"
   }, {
     "target" : "address_valid_to",
     "source1" : "contact.address_valid_to",
     "source2" : "10",
     "source3" : "default"
   } ],
   "Photocopy Request Detailed Display" : [ {
     "target" : "request_type",
     "source1" : "request_type",
     "source2" : "1",
     "source3" : "default"
   }, {
     "target" : "title",
     "source1" : "title",
     "source2" : "2",
     "source3" : "default"
   }, {
     "target" : "author",
     "source1" : "author",
     "source2" : "3",
     "source3" : "default"
   }, {
     "target" : "year",
     "source1" : "year",
     "source2" : "4",
     "source3" : "default"
   }, {
     "target" : "request_title",
     "source1" : "request_title",
     "source2" : "5",
     "source3" : "default"
   }, {
     "target" : "request_author",
     "source1" : "request_author",
     "source2" : "6",
     "source3" : "default"
   }, {
     "target" : "request_pages",
     "source1" : "request_pages",
     "source2" : "7",
     "source3" : "default"
   }, {
     "target" : "request_status",
     "source1" : "request_status",
     "source2" : "8",
     "source3" : "default"
   }, {
     "target" : "pickup_location_name",
     "source1" : "pickup_location_name",
     "source2" : "9",
     "source3" : "default"
   }, {
     "target" : "item_description",
     "source1" : "item_description",
     "source2" : "10",
     "source3" : "default"
   }, {
     "target" : "main_location_name",
     "source1" : "main_location_name",
     "source2" : "12",
     "source3" : "default"
   }, {
     "target" : "call_number",
     "source1" : "call_number",
     "source2" : "13",
     "source3" : "default"
   }, {
     "target" : "call_number_2",
     "source1" : "call_number_2",
     "source2" : "14",
     "source3" : "default"
   }, {
     "target" : "parton_note_1",
     "source1" : "parton_note_1",
     "source2" : "15",
     "source3" : "default"
   }, {
     "target" : "parton_note_2",
     "source1" : "parton_note_2",
     "source2" : "16",
     "source3" : "default"
   }, {
     "target" : "request_creation_date",
     "source1" : "request_creation_date",
     "source2" : "17",
     "source3" : "default"
   }, {
     "target" : "requester_name",
     "source1" : "requester_name",
     "source2" : "18",
     "source3" : "default"
   }, {
     "target" : "add_info",
     "source1" : "add_info",
     "source2" : "19",
     "source3" : "default"
   } ],
   "Call Slip Optional Request Parameters" : [ {
     "target" : "No",
     "source1" : "default",
     "source2" : "patron_note_1"
   } ],
   "Requests Brief Display" : [ {
     "target" : "&nbsp",
     "source1" : "default",
     "source2" : "requests.brief.loan_period",
     "source3" : "sessionperiod"
   }, {
     "target" : "&nbsp",
     "source1" : "default",
     "source2" : "requests.brief.maximum_renewal_period",
     "source3" : "maximumrenewalperiod"
   }, {
     "target" : "&nbsp",
     "source1" : "default",
     "source2" : "requests.brief.remaining_renewal_period",
     "source3" : "remainingrenewalperiod"
   }, {
     "target" : "&nbsp",
     "source1" : "default",
     "source2" : "requests.brief.1",
     "source3" : "author"
   }, {
     "target" : "&nbsp",
     "source1" : "default",
     "source2" : "requests.brief.2",
     "source3" : "pickuplocationname"
   } ],
   "My Account Menu Configuration - OvP" : [ {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "myaccount1",
     "source3" : "loans"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "myaccount2",
     "source3" : "requests"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "myaccount3",
     "source3" : "fines"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "myaccount4",
     "source3" : "blocks"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "myaccount5",
     "source3" : "personal_settings"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "myaccount6",
     "source3" : "deposits"
   } ],
   "Report a Problem" : [ {
     "target" : "true",
     "source1" : "01BC_INST:All",
     "source2" : "Activate widget"
   }, {
     "target" : "3",
     "source1" : "01BC_INST:All",
     "source2" : "Number of categories"
   }, {
     "target" : "",
     "source1" : "01BC_INST:All",
     "source2" : "Email address"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:All",
     "source2" : "Form email address mandatory"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:All",
     "source2" : "Form description mandatory"
   } ],
   "Resource Recommender Config" : [ {
     "target" : "priority",
     "source1" : "0",
     "source2" : "database"
   }, {
     "target" : "priority",
     "source1" : "1",
     "source2" : "library_guide"
   }, {
     "target" : "priority",
     "source1" : "2",
     "source2" : "website"
   }, {
     "target" : "priority",
     "source1" : "3",
     "source2" : "person"
   }, {
     "target" : "priority",
     "source1" : "4",
     "source2" : "library_information"
   }, {
     "target" : "priority",
     "source1" : "5",
     "source2" : "custom1"
   }, {
     "target" : "priority",
     "source1" : "6",
     "source2" : "custom2"
   }, {
     "target" : "priority",
     "source1" : "7",
     "source2" : "custom3"
   }, {
     "target" : "priority",
     "source1" : "8",
     "source2" : "banner"
   }, {
     "target" : "enable",
     "source1" : "enable",
     "source2" : "false"
   } ],
   "Alma ViewIt Config" : [ {
     "target" : "electronic_services_before_digital",
     "source1" : "true"
   } ],
   "My Account Links" : [ ],
   "sort_fields_config" : [ {
     "target" : "scdate",
     "source1" : "DESC",
     "source2" : "date"
   }, {
     "target" : "popularity",
     "source1" : "DESC",
     "source2" : "popularity"
   }, {
     "target" : "stitle",
     "source1" : "ASC",
     "source2" : "title"
   }, {
     "target" : "screator",
     "source1" : "ASC",
     "source2" : "author"
   } ],
   "Institution Properties" : [ {
     "target" : "false",
     "source1" : "display_actions_personal_settings"
   }, {
     "target" : "false",
     "source1" : "display_user_settings"
   }, {
     "target" : "Y",
     "source1" : "Save Users Search History"
   }, {
     "target" : "true",
     "source1" : "expanded_db_search"
   }, {
     "target" : "client",
     "source1" : "citeproc_engine"
   } ],
   "View Properties" : [ {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "enable_saveEshelf_message"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "enable_barcode_search"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "enable_resource_type_filter_bar"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "allow_direct_login_from_other_institutions"
   }, {
     "target" : "true",
     "source1" : "01BC_INST:Auto1",
     "source2" : "display_CDI_secondary_RT"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "enable_highlight_the_record_you_came_from"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:test",
     "source2" : "focus_on_search_input"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:test",
     "source2" : "enable_recent_scopes"
   }, {
     "target" : "true",
     "source1" : "01BC_INST:test",
     "source2" : "enable_qr"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:test",
     "source2" : "use_classic_email_template"
   }, {
     "target" : "true",
     "source1" : "01BC_INST:test",
     "source2" : "enable_saveEshelf_message"
   }, {
     "target" : "true",
     "source1" : "01BC_INST:test",
     "source2" : "export_all_records"
   }, {
     "target" : "true",
     "source1" : "01BC_INST:Auto1",
     "source2" : "export_all_records"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "nde_display_fields_table_is_customized"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "use_normalized_cdi_subjects"
   }, {
     "target" : "true",
     "source1" : "01BC_INST:Auto1",
     "source2" : "nde_display_summary_field"
   }, {
     "target" : "true",
     "source1" : "01BC_INST:Auto1",
     "source2" : "nde_display_snippet"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "nde_actions_table_is_customized"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "nde_share_actions_table_is_customized"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "nde_export_actions_table_is_customized"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "nde_show_times_cited"
   }, {
     "target" : "true",
     "source1" : "01BC_INST:Auto1",
     "source2" : "nde_display_all_requests_in_expand_mode"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "nde_full_record_services_table_is_customized"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "use_classic_email_template"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "focus_on_search_input"
   }, {
     "target" : "false",
     "source1" : "01BC_INST:Auto1",
     "source2" : "enable_recent_scopes"
   }, {
     "target" : "true",
     "source1" : "01BC_INST:Auto1",
     "source2" : "enable_qr"
   } ],
   "Resource Sharing Request Parameters" : [ {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "articleTitle",
     "source3" : "article",
     "source4" : "1",
     "source5" : "Yes"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "journalTitle",
     "source3" : "article",
     "source4" : "2",
     "source5" : "Yes"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "author",
     "source3" : "article",
     "source4" : "3",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "authorInitials",
     "source3" : "article",
     "source4" : "4",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "additionalAuthor",
     "source3" : "article",
     "source4" : "5",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "issn",
     "source3" : "article",
     "source4" : "6",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "lccn",
     "source3" : "article",
     "source4" : "7",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "oclcNumber",
     "source3" : "article",
     "source4" : "8",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "doi",
     "source3" : "article",
     "source4" : "9",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "pmid",
     "source3" : "article",
     "source4" : "10",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "placeOfPublication",
     "source3" : "article",
     "source4" : "12",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "publicationDate",
     "source3" : "article",
     "source4" : "13",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "journalVolume",
     "source3" : "article",
     "source4" : "14",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "issue",
     "source3" : "article",
     "source4" : "15",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "chapter",
     "source3" : "article",
     "source4" : "16",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "source",
     "source3" : "article",
     "source4" : "17",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "seriesTitleNumber",
     "source3" : "article",
     "source4" : "18",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "pagesToPhotocopy",
     "source3" : "article",
     "source4" : "19",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "startPage",
     "source3" : "article",
     "source4" : "20",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "endPage",
     "source3" : "article",
     "source4" : "21",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "publisher",
     "source3" : "article",
     "source4" : "11",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "format",
     "source3" : "delivery",
     "source4" : "1",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "requestedMedia",
     "source3" : "delivery",
     "source4" : "2",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "alternativeLocationAddress",
     "source3" : "delivery",
     "source4" : "3",
     "source5" : "No",
     "source6" : " "
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "line1",
     "source3" : "delivery",
     "source4" : "1",
     "source5" : "No",
     "source6" : " "
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "line2",
     "source3" : "delivery",
     "source4" : "2",
     "source5" : "No",
     "source6" : " "
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "itemAvailability",
     "source3" : "book",
     "source4" : "1",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "findBookItemsDescriptions",
     "source3" : "book",
     "source4" : "1",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "owner",
     "source3" : "owner",
     "source4" : "1",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "citationType",
     "source3" : "type",
     "source4" : "1",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "title",
     "source3" : "book",
     "source4" : "2",
     "source5" : "Yes"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "author",
     "source3" : "book",
     "source4" : "3",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "authorInitials",
     "source3" : "book",
     "source4" : "4",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "additionalAuthor",
     "source3" : "book",
     "source4" : "5",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "specificEdition",
     "source3" : "book",
     "source4" : "6",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "edition",
     "source3" : "book",
     "source4" : "7",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "isbn",
     "source3" : "book",
     "source4" : "8",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "lccn",
     "source3" : "book",
     "source4" : "9",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "oclcNumber",
     "source3" : "book",
     "source4" : "10",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "publisher",
     "source3" : "book",
     "source4" : "11",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "publicationDate",
     "source3" : "book",
     "source4" : "12",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "placeOfPublication",
     "source3" : "book",
     "source4" : "13",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "volume",
     "source3" : "book",
     "source4" : "14",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "part",
     "source3" : "book",
     "source4" : "15",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "chapter",
     "source3" : "book",
     "source4" : "16",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "source",
     "source3" : "book",
     "source4" : "17",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "seriesTitleNumber",
     "source3" : "book",
     "source4" : "18",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "pagesToPhotocopy",
     "source3" : "book",
     "source4" : "19",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "findArticleItemsDescriptions",
     "source3" : "article",
     "source4" : "0",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "doiAutoFill",
     "source3" : "article",
     "source4" : "10",
     "source5" : "No",
     "source6" : "null"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "pmidAutoFill",
     "source3" : "article",
     "source4" : "12",
     "source5" : "No",
     "source6" : "null"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "specificChapterPages",
     "source3" : "chapter",
     "source4" : "1",
     "source5" : "No",
     "source6" : "null"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "genericCheckBox",
     "source3" : "delivery",
     "source4" : "22",
     "source5" : "No",
     "source6" : " "
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "formDescription",
     "source3" : "owner",
     "source4" : "1",
     "source5" : "No"
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "line3",
     "source3" : "delivery",
     "source4" : "3",
     "source5" : "No",
     "source6" : " "
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "line4",
     "source3" : "delivery",
     "source4" : "4",
     "source5" : "No",
     "source6" : " "
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "alternativeLocationEmail",
     "source3" : "delivery",
     "source4" : "8",
     "source5" : "No",
     "source6" : " "
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "email",
     "source3" : "delivery",
     "source4" : "1",
     "source5" : "No",
     "source6" : " "
   }, {
     "target" : "Yes",
     "source1" : "singleinst",
     "source2" : "pickupLocation",
     "source3" : "delivery",
     "source4" : "14",
     "source5" : "Yes",
     "source6" : " "
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "notNeedAfter",
     "source3" : "delivery",
     "source4" : "15",
     "source5" : "No",
     "source6" : " "
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "comment",
     "source3" : "delivery",
     "source4" : "16",
     "source5" : "No",
     "source6" : " "
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "maximumFee",
     "source3" : "delivery",
     "source4" : "17",
     "source5" : "No",
     "source6" : " "
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "levelOfService",
     "source3" : "delivery",
     "source4" : "18",
     "source5" : "No"
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "copyrights",
     "source3" : "delivery",
     "source4" : "19",
     "source5" : "Yes",
     "source6" : " "
   }, {
     "target" : "No",
     "source1" : "both",
     "source2" : "language",
     "source3" : "delivery",
     "source4" : "20",
     "source5" : "No",
     "source6" : " "
   }, {
     "target" : "Yes",
     "source1" : "both",
     "source2" : "willingToPay",
     "source3" : "delivery",
     "source4" : "21",
     "source5" : "No",
     "source6" : " "
   } ],
   "Featured newspapers" : [ ],
   "Nde Export Actions" : [ {
     "target" : "RISPushTo",
     "source1" : "5"
   }, {
     "target" : "BibTeXPushTo",
     "source1" : "6"
   }, {
     "target" : "Mendeley",
     "source1" : "7"
   }, {
     "target" : "Excel",
     "source1" : "8"
   }, {
     "target" : "Leganto",
     "source1" : "9"
   }, {
     "target" : "EasyBib",
     "source1" : "4"
   }, {
     "target" : "Print",
     "source1" : "1"
   }, {
     "target" : "RefWorks",
     "source1" : "2"
   }, {
     "target" : "EndNote",
     "source1" : "3"
   } ],
   "Controlled Digital Lending Request Detailed Display" : [ {
     "target" : "request_type",
     "source1" : "request_type",
     "source2" : "1",
     "source3" : "default"
   }, {
     "target" : "author",
     "source1" : "author",
     "source2" : "2",
     "source3" : "default"
   }, {
     "target" : "title",
     "source1" : "title",
     "source2" : "3",
     "source3" : "default"
   }, {
     "target" : "year",
     "source1" : "year",
     "source2" : "4",
     "source3" : "default"
   }, {
     "target" : "request_status",
     "source1" : "request_status",
     "source2" : "5",
     "source3" : "default"
   }, {
     "target" : "cdl_start_date",
     "source1" : "cdl_start_date",
     "source2" : "6",
     "source3" : "default"
   }, {
     "target" : "cdl_start_hour",
     "source1" : "cdl_start_hour",
     "source2" : "7",
     "source3" : "default"
   }, {
     "target" : "cdl_end_date",
     "source1" : "cdl_end_date",
     "source2" : "8",
     "source3" : "default"
   }, {
     "target" : "cdl_end_hour",
     "source1" : "cdl_end_hour",
     "source2" : "9",
     "source3" : "default"
   }, {
     "target" : "pickup_location_name",
     "source1" : "pickup_location_name",
     "source2" : "10",
     "source3" : "default"
   }, {
     "target" : "return_location",
     "source1" : "return_location",
     "source2" : "11",
     "source3" : "default"
   }, {
     "target" : "delivery_method",
     "source1" : "delivery_method",
     "source2" : "12",
     "source3" : "default"
   }, {
     "target" : "requester_id",
     "source1" : "requester_id",
     "source2" : "15",
     "source3" : "default"
   }, {
     "target" : "patron_note_1",
     "source1" : "patron_note_1",
     "source2" : "16",
     "source3" : "default"
   }, {
     "target" : "patron_note_2",
     "source1" : "patron_note_2",
     "source2" : "17",
     "source3" : "default"
   }, {
     "target" : "item_description",
     "source1" : "item_description",
     "source2" : "19",
     "source3" : "default"
   }, {
     "target" : "main_location_name",
     "source1" : "main_location_name",
     "source2" : "20",
     "source3" : "default"
   }, {
     "target" : "secondary_location_name",
     "source1" : "secondary_location_name",
     "source2" : "23",
     "source3" : "default"
   }, {
     "target" : "call_number",
     "source1" : "call_number",
     "source2" : "24",
     "source3" : "default"
   }, {
     "target" : "call_number_2",
     "source1" : "call_number_2",
     "source2" : "25",
     "source3" : "default"
   }, {
     "target" : "item_category_name",
     "source1" : "item_category_name",
     "source2" : "27",
     "source3" : "default"
   }, {
     "target" : "item_status_name",
     "source1" : "item_status_name",
     "source2" : "28",
     "source3" : "default"
   }, {
     "target" : "group_id",
     "source1" : "group_id",
     "source2" : "31",
     "source3" : "default"
   }, {
     "target" : "loan_period",
     "source1" : "loan_period",
     "source2" : "35",
     "source3" : "default"
   }, {
     "target" : "grace_period",
     "source1" : "grace_period",
     "source2" : "36",
     "source3" : "default"
   }, {
     "target" : "request_id",
     "source1" : "request_id",
     "source2" : "38",
     "source3" : "default"
   }, {
     "target" : "request_date",
     "source1" : "request_date",
     "source2" : "39",
     "source3" : "default"
   }, {
     "target" : "maximum_renewal_period",
     "source1" : "maximum_renewal_period",
     "source2" : "40",
     "source3" : "default"
   }, {
     "target" : "remaining_renewal_period",
     "source1" : "remaining_renewal_period",
     "source2" : "41",
     "source3" : "default"
   } ],
   "Digitization Optional Request Parameters" : [ {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "partial",
     "source3" : "True",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "chapterArticleTitle",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "chapterArticleAuthor",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "startPage",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "endPage",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "fullChapter",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "comment",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "notNeededAfter",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "copyrightDeclaration",
     "source5" : "true"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "generalUseLabel",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "calculateQueueButton",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "volume",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "issue",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "part",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "publicationDate",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "manualDescription",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "genericCheckBox",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "formDescription",
     "source5" : "false"
   } ],
   "Purchase Request Optional Parameters" : [ {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "author",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "formDescription",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "edition",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "isbn",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "issn",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "lccNumber",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "oclcNumber",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "publisher",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "publication_year",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "place_of_publication",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "volume",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "requesterNotes",
     "source5" : "false"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "materialType",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "purchaseRequestLibrary",
     "source5" : "false"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "genericCheckBox",
     "source5" : "false"
   } ],
   "Share Action Configuration" : [ {
     "target" : "WhatsApp",
     "source1" : "1"
   }, {
     "target" : "Facebook",
     "source1" : "2"
   }, {
     "target" : "Twitter",
     "source1" : "3"
   }, {
     "target" : "LinkedIn",
     "source1" : "4"
   } ],
   "NDE Quick Filters" : [ {
     "target" : "facets.facet.tlevel.online_resources",
     "source1" : "1"
   }, {
     "target" : "facets.facet.tlevel.available_p",
     "source1" : "2"
   }, {
     "target" : "facets.facet.tlevel.peer_reviewed",
     "source1" : "3"
   } ],
   "Loans Detailed Display" : [ {
     "target" : "year",
     "source1" : "year",
     "source2" : "1",
     "source3" : "default"
   }, {
     "target" : "item_category_name",
     "source1" : "item_category_name",
     "source2" : "15",
     "source3" : "default"
   }, {
     "target" : "ils_institution_name",
     "source1" : "ils_institution_name",
     "source2" : "17",
     "source3" : "default"
   }, {
     "target" : "item_barcode",
     "source1" : "item_barcode",
     "source2" : "18",
     "source3" : "default"
   }, {
     "target" : "max_renew_date",
     "source1" : "max_renew_date",
     "source2" : "19",
     "source3" : "default"
   }, {
     "target" : "item_description",
     "source1" : "Description",
     "source2" : "20",
     "source3" : "default"
   }, {
     "target" : "item_id",
     "source1" : "item_id",
     "source2" : "21",
     "source3" : "default"
   }, {
     "target" : "last_renew_date",
     "source1" : "last_renew_date",
     "source2" : "22",
     "source3" : "default"
   }, {
     "target" : "no_overdue_notices",
     "source1" : "no_overdue_notices",
     "source2" : "23",
     "source3" : "default"
   }, {
     "target" : "no_renewal",
     "source1" : "no_renewal",
     "source2" : "24",
     "source3" : "default"
   }, {
     "target" : "proxy_id",
     "source1" : "proxy_id",
     "source2" : "25",
     "source3" : "default"
   }, {
     "target" : "call_number",
     "source1" : "call_number",
     "source2" : "9",
     "source3" : "default"
   }, {
     "target" : "call_number_2",
     "source1" : "call_number_2",
     "source2" : "10",
     "source3" : "default"
   }, {
     "target" : "loan_date",
     "source1" : "loan_date",
     "source2" : "11",
     "source3" : "default"
   }, {
     "target" : "loan_status",
     "source1" : "loan_status",
     "source2" : "12",
     "source3" : "default"
   }, {
     "target" : "item_status_name",
     "source1" : "item_status_name",
     "source2" : "13",
     "source3" : "default"
   }, {
     "target" : "due_date",
     "source1" : "due_date",
     "source2" : "2",
     "source3" : "default"
   }, {
     "target" : "due_hour",
     "source1" : "due_hour",
     "source2" : "3",
     "source3" : "default"
   }, {
     "target" : "fine",
     "source1" : "fine",
     "source2" : "4",
     "source3" : "default"
   }, {
     "target" : "main_location_name",
     "source1" : "main_location_name",
     "source2" : "5",
     "source3" : "default"
   }, {
     "target" : "secondary_location_name",
     "source1" : "secondary_location_name",
     "source2" : "7",
     "source3" : "default"
   } ],
   "Actions List" : [ {
     "target" : "default",
     "source1" : "e-shelf",
     "source2" : "0",
     "source3" : "0"
   }, {
     "target" : "default",
     "source1" : "E-mail",
     "source2" : "1",
     "source3" : "1"
   }, {
     "target" : "default",
     "source1" : "Permalink",
     "source2" : "2",
     "source3" : "2"
   }, {
     "target" : "default",
     "source1" : "Citation",
     "source2" : "3"
   }, {
     "target" : "default",
     "source1" : "Print",
     "source2" : "4"
   }, {
     "target" : "default",
     "source1" : "RefWorks",
     "source2" : "5"
   }, {
     "target" : "default",
     "source1" : "EndNote",
     "source2" : "6"
   }, {
     "target" : "default",
     "source1" : "EasyBib",
     "source2" : "7"
   }, {
     "target" : "default",
     "source1" : "RISPushTo",
     "source2" : "8"
   }, {
     "target" : "default",
     "source1" : "BibTeXPushTo",
     "source2" : "9"
   } ],
   "Recent Searches Configuration" : [ {
     "target" : "01BC_INST",
     "source1" : "Y"
   } ],
   "Hypertext Linking Definitions" : [ {
     "target" : "creator",
     "source1" : "creator",
     "source2" : "exact",
     "source3" : "ANY"
   }, {
     "target" : "subject",
     "source1" : "sub",
     "source2" : "exact",
     "source3" : "ANY"
   }, {
     "target" : "series",
     "source1" : "title",
     "source2" : "exact",
     "source3" : "L"
   }, {
     "target" : "relation",
     "source1" : "title",
     "source2" : "exact",
     "source3" : "L"
   }, {
     "target" : "ispartof",
     "source1" : "title",
     "source2" : "exact",
     "source3" : "L"
   }, {
     "target" : "mesh",
     "source1" : "mesh",
     "source2" : "exact",
     "source3" : "ANY"
   }, {
     "target" : "boundwith",
     "source1" : "title",
     "source2" : "exact",
     "source3" : "L"
   }, {
     "target" : "grantURL",
     "source1" : "title",
     "source2" : "exact",
     "source3" : "ANY"
   }, {
     "target" : "contributor",
     "source1" : "creator",
     "source2" : "exact",
     "source3" : "ANY"
   } ],
   "Browse Lists" : [ {
     "target" : "Yes",
     "source1" : "author",
     "source2" : "title",
     "source4" : "default",
     "source5" : "1",
     "source6" : "true"
   }, {
     "target" : "Yes",
     "source1" : "title",
     "source2" : "author",
     "source4" : "default",
     "source5" : "2",
     "source6" : "false"
   }, {
     "target" : "No",
     "source1" : "series",
     "source2" : "title",
     "source4" : "default",
     "source5" : "3",
     "source6" : "false"
   }, {
     "target" : "No",
     "source1" : "callnumber.0",
     "source4" : "default",
     "source5" : "4",
     "source6" : "false"
   }, {
     "target" : "No",
     "source1" : "callnumber.1",
     "source4" : "default",
     "source5" : "5",
     "source6" : "false"
   }, {
     "target" : "No",
     "source1" : "callnumber.2",
     "source4" : "default",
     "source5" : "6",
     "source6" : "false"
   }, {
     "target" : "No",
     "source1" : "callnumber.3",
     "source4" : "default",
     "source5" : "7",
     "source6" : "false"
   }, {
     "target" : "No",
     "source1" : "callnumber.4",
     "source4" : "default",
     "source5" : "8",
     "source6" : "false"
   }, {
     "target" : "No",
     "source1" : "callnumber.UDC",
     "source4" : "default",
     "source5" : "9",
     "source6" : "false"
   }, {
     "target" : "No",
     "source1" : "callnumber",
     "source4" : "default",
     "source5" : "10",
     "source6" : "false"
   }, {
     "target" : "No",
     "source1" : "subject.1",
     "source2" : "author",
     "source4" : "default",
     "source5" : "11",
     "source6" : "true"
   }, {
     "target" : "No",
     "source1" : "subject.2",
     "source2" : "author",
     "source4" : "default",
     "source5" : "12",
     "source6" : "true"
   }, {
     "target" : "No",
     "source1" : "subject.3",
     "source2" : "author",
     "source4" : "default",
     "source5" : "13",
     "source6" : "true"
   }, {
     "target" : "No",
     "source1" : "subject.4",
     "source2" : "author",
     "source4" : "default",
     "source5" : "14",
     "source6" : "true"
   }, {
     "target" : "No",
     "source1" : "subject.5",
     "source2" : "author",
     "source4" : "default",
     "source5" : "15",
     "source6" : "true"
   } ],
   "Holdings Display In Locations List" : [ {
     "target" : "holdings_fields_display_in_locations_list_view",
     "source2" : "false"
   } ],
   "Nde otb Actions List" : [ {
     "target" : "default",
     "source1" : "Share Actions",
     "source2" : "0"
   }, {
     "target" : "default",
     "source1" : "Citation",
     "source2" : "1"
   }, {
     "target" : "default",
     "source1" : "Export Actions",
     "source2" : "2"
   }, {
     "target" : "default",
     "source1" : "Save to Favorites",
     "source2" : "3"
   } ],
   "Loans Brief Display" : [ {
     "target" : "&nbsp",
     "source1" : "default",
     "source2" : "loans.brief.1",
     "source3" : "author",
     "source4" : "Select Value",
     "source5" : "Select Value"
   }, {
     "target" : "&nbsp",
     "source1" : "default",
     "source2" : "loans.brief.2",
     "source3" : "main_location_name",
     "source4" : "secondary_location_name",
     "source5" : "call_number"
   } ],
   "ILL Optional Request Parameters" : [ {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "allowed_media"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "service_level"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "delivery_method"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "last_interest_date"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "request_author"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "request_title"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "request_volume"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "request_pages"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "patron_note_1"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "language"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "request_month"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "request_day"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "request_issue"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "willing_to_pay"
   }, {
     "target" : "Yes",
     "source1" : "default",
     "source2" : "send_directly"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "copyright"
   } ],
   "Voice Languages" : [ {
     "target" : "Afrikaans",
     "source1" : " ",
     "source2" : "af"
   }, {
     "target" : "Arabic",
     "source1" : " ",
     "source2" : "ar-JO"
   }, {
     "target" : "basque",
     "source1" : "es_EU",
     "source2" : "eu"
   }, {
     "target" : "Bulgarian",
     "source1" : " ",
     "source2" : "bg"
   }, {
     "target" : "Català",
     "source1" : "ca_ES",
     "source2" : "ca"
   }, {
     "target" : "Chinese",
     "source1" : "zh_TW",
     "source2" : "zh-TW"
   }, {
     "target" : "Czech",
     "source1" : " ",
     "source2" : "cs"
   }, {
     "target" : "Dansk",
     "source1" : "da_DK"
   }, {
     "target" : "Deutsch",
     "source1" : "de_DE",
     "source2" : "de-DE"
   }, {
     "target" : "Dutch",
     "source1" : " ",
     "source2" : "nl-NL"
   }, {
     "target" : "English",
     "source1" : "en_US",
     "source2" : "en-US"
   }, {
     "target" : "English (Australia)",
     "source1" : " ",
     "source2" : "en-AU"
   }, {
     "target" : "English (Canada)",
     "source1" : " ",
     "source2" : "en-CA"
   }, {
     "target" : "English (India)",
     "source1" : " ",
     "source2" : "en-IN"
   }, {
     "target" : "English (South Africa)",
     "source1" : " ",
     "source2" : "en-ZA"
   }, {
     "target" : "English(UK)",
     "source1" : " ",
     "source2" : "en-GB"
   }, {
     "target" : "Finnish",
     "source1" : " ",
     "source2" : "fi"
   }, {
     "target" : "Français",
     "source1" : "fr_FR",
     "source2" : "fr-FR"
   }, {
     "target" : "Galician",
     "source1" : "gl_ES",
     "source2" : "gl"
   }, {
     "target" : "Greek",
     "source1" : " ",
     "source2" : "el-GR"
   }, {
     "target" : "Hebrew",
     "source1" : "iw_IL",
     "source2" : "he"
   }, {
     "target" : "Iceland",
     "source1" : "is_IS",
     "source2" : "is"
   }, {
     "target" : "Indonesian",
     "source1" : " ",
     "source2" : "id"
   }, {
     "target" : "italiano",
     "source1" : "it_IT",
     "source2" : "it-IT"
   }, {
     "target" : "Japanese",
     "source1" : " ",
     "source2" : "ja"
   }, {
     "target" : "Korean",
     "source1" : "ko_KR",
     "source2" : "ko"
   }, {
     "target" : "Latin Spanish",
     "source1" : "es_CL",
     "source2" : "la"
   }, {
     "target" : "Magyar",
     "source1" : "hu_HU",
     "source2" : "ta"
   }, {
     "target" : "Melayu",
     "source1" : "ms_MY",
     "source2" : "ms-MY"
   }, {
     "target" : "Norse",
     "source1" : "no_NO",
     "source2" : "no-NO"
   }, {
     "target" : "Polski",
     "source1" : "pl_PL",
     "source2" : "pl"
   }, {
     "target" : "Portuguese",
     "source1" : " ",
     "source2" : "pt-PT"
   }, {
     "target" : "Portuguese (Brasil)",
     "source1" : " ",
     "source2" : "pt-BR"
   }, {
     "target" : "Romanian",
     "source1" : " ",
     "source2" : "ro-RO"
   }, {
     "target" : "Russian",
     "source1" : "ru_RU",
     "source2" : "ru"
   }, {
     "target" : "Serbian",
     "source1" : " ",
     "source2" : "sr-SP"
   }, {
     "target" : "Simplified Hong Kong",
     "source1" : " ",
     "source2" : "zh-HK"
   }, {
     "target" : "Slovak",
     "source1" : " ",
     "source2" : "sk"
   }, {
     "target" : "Spanish",
     "source1" : "es_ES",
     "source2" : "es-ES"
   }, {
     "target" : "Spanish (Argentina)",
     "source1" : " ",
     "source2" : "es-AR"
   }, {
     "target" : "Spanish (Chile)",
     "source1" : " ",
     "source2" : "es-CL"
   }, {
     "target" : "Spanish (Mexico)",
     "source1" : " ",
     "source2" : "es-MX"
   }, {
     "target" : "Svenska",
     "source1" : "sv_SE",
     "source2" : "sv-SE"
   }, {
     "target" : "Turkish",
     "source1" : "tr_TR",
     "source2" : "tr"
   }, {
     "target" : "Welsh",
     "source1" : "cy_GB"
   }, {
     "target" : "Zulu",
     "source1" : " ",
     "source2" : "zu"
   }, {
     "target" : "česky",
     "source1" : "cs_CZ",
     "source2" : "cs"
   }, {
     "target" : "தமிழ்",
     "source1" : "ta_IN"
   }, {
     "target" : "华文",
     "source1" : "zh_CN",
     "source2" : "zh-CN"
   } ],
   "Bulk Definition" : [ {
     "target" : "100",
     "source1" : "OvP - Loans Paging"
   }, {
     "target" : "10",
     "source1" : "OvP - Items Paging"
   }, {
     "target" : "10",
     "source1" : "Reviews"
   } ],
   "Nde Share Actions" : [ {
     "target" : "Email",
     "source1" : "1"
   }, {
     "target" : "Permalink",
     "source1" : "2"
   }, {
     "target" : "Whatsapp",
     "source1" : "3"
   }, {
     "target" : "Facebook",
     "source1" : "4"
   }, {
     "target" : "Twitter",
     "source1" : "5"
   }, {
     "target" : "LinkedIn",
     "source1" : "6"
   }, {
     "target" : "QR",
     "source1" : "7"
   } ],
   "Items Brief Display" : [ {
     "target" : "&nbsp;",
     "source1" : "default",
     "source2" : "item.brief.1",
     "source3" : "itemstatusname",
     "source4" : "queue"
   }, {
     "target" : "&nbsp;",
     "source1" : "default",
     "source2" : "item.brief.2",
     "source3" : "itemcategoryname"
   }, {
     "target" : "&nbsp;",
     "source1" : "default",
     "source2" : "item.brief.3",
     "source3" : "itemdescription"
   } ],
   "Photocopy Optional Request Parameters" : [ {
     "target" : "No",
     "source1" : "default",
     "source2" : "request_author"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "request_title"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "patron_note_1"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "patron_note_2"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "add_info"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "requester_name"
   } ],
   "User Login Links" : [ {
     "source1" : "login.link1"
   }, {
     "source1" : "login.link2"
   }, {
     "source1" : "login.link3"
   }, {
     "source1" : "login.link4"
   } ],
   "Acquisition Request Detailed Display" : [ {
     "target" : "imprint",
     "source1" : "imprint",
     "source2" : "5",
     "source3" : "default"
   }, {
     "target" : "request_title",
     "source1" : "request_title",
     "source2" : "6",
     "source3" : "default"
   }, {
     "target" : "request_pages",
     "source1" : "request_pages",
     "source2" : "7",
     "source3" : "default"
   }, {
     "target" : "order_number",
     "source1" : "order_number",
     "source2" : "8",
     "source3" : "default"
   }, {
     "target" : "request_status",
     "source1" : "request_status",
     "source2" : "9",
     "source3" : "default"
   }, {
     "target" : "last_status_date",
     "source1" : "last_status_date",
     "source2" : "10",
     "source3" : "default"
   }, {
     "target" : "library_note",
     "source1" : "library_note",
     "source2" : "11",
     "source3" : "default"
   }, {
     "target" : "request_type",
     "source1" : "request_type",
     "source2" : "1",
     "source3" : "default"
   }, {
     "target" : "title",
     "source1" : "title",
     "source2" : "2",
     "source3" : "default"
   }, {
     "target" : "author",
     "source1" : "author",
     "source2" : "3",
     "source3" : "default"
   }, {
     "target" : "year",
     "source1" : "year",
     "source2" : "4",
     "source3" : "default"
   } ],
   "primo_central_institutions_unique_ids" : [ {
     "target" : "VOLCANO",
     "source1" : "61UWA.UWA-ALMA.PPRD"
   } ],
   "Fines Detailed Display" : [ {
     "target" : "type",
     "source1" : "type",
     "source2" : "1",
     "source3" : "default"
   }, {
     "target" : "author",
     "source1" : "author",
     "source2" : "2",
     "source3" : "default"
   }, {
     "target" : "title",
     "source1" : "title",
     "source2" : "3",
     "source3" : "default"
   }, {
     "target" : "year",
     "source1" : "year",
     "source2" : "4",
     "source3" : "default"
   }, {
     "target" : "fine_status",
     "source1" : "fine_status",
     "source2" : "5",
     "source3" : "default"
   }, {
     "target" : "fine_description",
     "source1" : "fine_description",
     "source2" : "6",
     "source3" : "default"
   }, {
     "target" : "fine_sum",
     "source1" : "fine_sum",
     "source2" : "7",
     "source3" : "default"
   }, {
     "target" : "fine_date",
     "source1" : "fine_date",
     "source2" : "8",
     "source3" : "default"
   }, {
     "target" : "fine_main_location",
     "source1" : "fine_main_location",
     "source2" : "9",
     "source3" : "default"
   }, {
     "target" : "transferred",
     "source1" : "transferred",
     "source2" : "10",
     "source3" : "default"
   }, {
     "target" : "transfer_date",
     "source1" : "transfer_date",
     "source2" : "11",
     "source3" : "default"
   }, {
     "target" : "transfer_department",
     "source1" : "transfer_department",
     "source2" : "12",
     "source3" : "default"
   }, {
     "target" : "transfer_number",
     "source1" : "transfer_number",
     "source2" : "13",
     "source3" : "default"
   }, {
     "target" : "ils_institution_name",
     "source1" : "ils_institution_name",
     "source2" : "15",
     "source3" : "default"
   }, {
     "target" : "main_location_name",
     "source1" : "main_location_name",
     "source2" : "17",
     "source3" : "default"
   }, {
     "target" : "call_number",
     "source1" : "call_number",
     "source2" : "20",
     "source3" : "default"
   }, {
     "target" : "call_number_2",
     "source1" : "call_number_2",
     "source2" : "21",
     "source3" : "default"
   }, {
     "target" : "item_category_name",
     "source1" : "item_category_name",
     "source2" : "23",
     "source3" : "default"
   }, {
     "target" : "item_status_name",
     "source1" : "item_status_name",
     "source2" : "24",
     "source3" : "default"
   }, {
     "target" : "item_barcode",
     "source1" : "item_barcode",
     "source2" : "25",
     "source3" : "default"
   }, {
     "target" : "fine_id",
     "source1" : "fine_id",
     "source2" : "26",
     "source3" : "default"
   }, {
     "target" : "secondary_location_name",
     "source1" : "secondary_location_name",
     "source2" : "19",
     "source3" : "default"
   } ],
   "ILL Request Detailed Display" : [ {
     "target" : "last_interest_date",
     "source1" : "last_interest_date",
     "source2" : "21",
     "source3" : "default"
   }, {
     "target" : "request_type",
     "source1" : "request_type",
     "source2" : "1",
     "source3" : "default"
   }, {
     "target" : "title",
     "source1" : "title",
     "source2" : "2",
     "source3" : "default"
   }, {
     "target" : "author",
     "source1" : "author",
     "source2" : "3",
     "source3" : "default"
   }, {
     "target" : "year",
     "source1" : "year",
     "source2" : "4",
     "source3" : "default"
   }, {
     "target" : "title_imprint",
     "source1" : "title_imprint",
     "source2" : "5",
     "source3" : "default"
   }, {
     "target" : "media",
     "source1" : "media",
     "source2" : "6",
     "source3" : "default"
   }, {
     "target" : "request_title",
     "source1" : "request_title",
     "source2" : "7",
     "source3" : "default"
   }, {
     "target" : "request_author",
     "source1" : "request_author",
     "source2" : "8",
     "source3" : "default"
   }, {
     "target" : "request_add_data_1",
     "source1" : "request_add_data_1",
     "source2" : "9",
     "source3" : "default"
   }, {
     "target" : "request_add_data_2",
     "source1" : "request_add_data_2",
     "source2" : "10",
     "source3" : "default"
   }, {
     "target" : "request_add_data_3",
     "source1" : "request_add_data_3",
     "source2" : "11",
     "source3" : "default"
   }, {
     "target" : "request_add_data_4",
     "source1" : "request_add_data_4",
     "source2" : "12",
     "source3" : "default"
   }, {
     "target" : "request_add_data_5",
     "source1" : "request_add_data_5",
     "source2" : "13",
     "source3" : "default"
   }, {
     "target" : "request_status",
     "source1" : "request_status",
     "source2" : "14",
     "source3" : "default"
   }, {
     "target" : "suppliers_status",
     "source1" : "suppliers_status",
     "source2" : "15",
     "source3" : "default"
   }, {
     "target" : "update_date",
     "source1" : "update_date",
     "source2" : "16",
     "source3" : "default"
   }, {
     "target" : "pickup_location_name",
     "source1" : "pickup_location_name",
     "source2" : "17",
     "source3" : "default"
   }, {
     "target" : "preferred_pickup_location_name",
     "source1" : "preferred_pickup_location_name",
     "source2" : "18",
     "source3" : "default"
   }, {
     "target" : "patron_note_1",
     "source1" : "patron_note_1",
     "source2" : "19",
     "source3" : "default"
   }, {
     "target" : "staff_note",
     "source1" : "staff_note",
     "source2" : "20",
     "source3" : "default"
   } ],
   "Personal Details Configuration" : [ {
     "target" : "User Expiration Date",
     "source1" : "Display user expiration date in Personal Details"
   } ],
   "Prima Filter Bar Resource Types" : [ {
     "target" : "books",
     "source1" : "ALL",
     "source2" : "1"
   }, {
     "target" : "articles",
     "source1" : "ALL",
     "source2" : "2"
   }, {
     "target" : "journals",
     "source1" : "ALL",
     "source2" : "3"
   }, {
     "target" : "images",
     "source1" : "ALL",
     "source2" : "4"
   }, {
     "target" : "collections",
     "source1" : "ALL",
     "source2" : "5"
   }, {
     "target" : "videos",
     "source1" : "ALL",
     "source2" : "6"
   } ],
   "Authority Search Scopes" : [ {
     "target" : "keyword",
     "source1" : "01BC_INST:Auto1",
     "source2" : "1",
     "source3" : "Keyword (any field)"
   }, {
     "target" : "personalname",
     "source1" : "01BC_INST:Auto1",
     "source2" : "2",
     "source3" : "Personal Name"
   }, {
     "target" : "corporatename",
     "source1" : "01BC_INST:Auto1",
     "source2" : "3",
     "source3" : "Corporate Name"
   }, {
     "target" : "meetingname",
     "source1" : "01BC_INST:Auto1",
     "source2" : "4",
     "source3" : "Meeting Name"
   }, {
     "target" : "allnames",
     "source1" : "01BC_INST:Auto1",
     "source2" : "5",
     "source3" : "Name"
   }, {
     "target" : "topic",
     "source1" : "01BC_INST:Auto1",
     "source2" : "6",
     "source3" : "Subject"
   }, {
     "target" : "geographic",
     "source1" : "01BC_INST:Auto1",
     "source2" : "7",
     "source3" : "Geographic Term"
   }, {
     "target" : "genreform",
     "source1" : "01BC_INST:Auto1",
     "source2" : "8",
     "source3" : "Genre/Form Term"
   }, {
     "target" : "title",
     "source1" : "01BC_INST:Auto1",
     "source2" : "9",
     "source3" : "Uniform Title"
   } ],
   "Call Slip Request Detailed Display" : [ {
     "target" : "request_type",
     "source1" : "request_type",
     "source2" : "1",
     "source3" : "default"
   }, {
     "target" : "title",
     "source1" : "title",
     "source2" : "2",
     "source3" : "default"
   }, {
     "target" : "request_status",
     "source1" : "request_status",
     "source2" : "3",
     "source3" : "default"
   }, {
     "target" : "pickup_location_name",
     "source1" : "pickup_location_name",
     "source2" : "3",
     "source3" : "default"
   }, {
     "target" : "end_callslip_date",
     "source1" : "end_callslip_date",
     "source2" : "4",
     "source3" : "default"
   }, {
     "target" : "ils_institution_name",
     "source1" : "ils_institution_name",
     "source2" : "7",
     "source3" : "default"
   } ],
   "Featured Results" : [ {
     "target" : "title",
     "source1" : "view",
     "source2" : "CentralIndex",
     "source3" : "Select resource type"
   }, {
     "target" : "Images",
     "source1" : "view",
     "source2" : "MyInstitution",
     "source3" : "images"
   } ],
   "Fines Brief Display" : [ {
     "target" : "&nbsp",
     "source1" : "default",
     "source2" : "fines.brief.1",
     "source3" : "title"
   }, {
     "target" : "&nbsp",
     "source1" : "default",
     "source2" : "fines.brief.2",
     "source3" : "finedate"
   } ],
   "Hold Optional Request Parameters" : [ {
     "target" : "No",
     "source1" : "default",
     "source2" : "last_interest_date"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "request_author"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "request_title"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "request_pages"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "patron_note_1"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "patron_note_2"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "rush_request"
   } ],
   "Location Item content" : [ {
     "target" : "callnumber2",
     "source1" : "default",
     "source2" : "item.global.dataitem.1"
   }, {
     "target" : "noteopac",
     "source1" : "default",
     "source2" : "item.global.dataitem.2"
   }, {
     "target" : "itemmaterial",
     "source1" : "default",
     "source2" : "item.global.dataitem.3"
   }, {
     "target" : "mainlocationname secondarylocationname callnumber",
     "source1" : "default",
     "source2" : "item.global.dataitem.4"
   }, {
     "target" : "itembarcode",
     "source1" : "default",
     "source2" : "item.global.dataitem.5"
   }, {
     "target" : "year",
     "source1" : "default",
     "source2" : "item.global.dataitem.6"
   }, {
     "target" : "5",
     "source1" : "default",
     "source2" : "item.brief.number_of_items"
   } ],
   "Short Loan and Booking Request Detailed Display" : [ {
     "target" : "request_type",
     "source1" : "request_type",
     "source2" : "1",
     "source3" : "default"
   }, {
     "target" : "author",
     "source1" : "author",
     "source2" : "2",
     "source3" : "default"
   }, {
     "target" : "title",
     "source1" : "title",
     "source2" : "3",
     "source3" : "default"
   }, {
     "target" : "year",
     "source1" : "year",
     "source2" : "4",
     "source3" : "default"
   }, {
     "target" : "request_status",
     "source1" : "request_status",
     "source2" : "5",
     "source3" : "default"
   }, {
     "target" : "booking_start_date",
     "source1" : "booking_start_date",
     "source2" : "6",
     "source3" : "default"
   }, {
     "target" : "booking_start_hour",
     "source1" : "booking_start_hour",
     "source2" : "7",
     "source3" : "default"
   }, {
     "target" : "booking_end_date",
     "source1" : "booking_end_date",
     "source2" : "8",
     "source3" : "default"
   }, {
     "target" : "booking_end_hour",
     "source1" : "booking_end_hour",
     "source2" : "9",
     "source3" : "default"
   }, {
     "target" : "pickup_location_name",
     "source1" : "pickup_location_name",
     "source2" : "10",
     "source3" : "default"
   }, {
     "target" : "return_location",
     "source1" : "return_location",
     "source2" : "11",
     "source3" : "default"
   }, {
     "target" : "delivery_method",
     "source1" : "delivery_method",
     "source2" : "12",
     "source3" : "default"
   }, {
     "target" : "ils_institution_name",
     "source1" : "ils_institution_name",
     "source2" : "14",
     "source3" : "default"
   }, {
     "target" : "requester_id",
     "source1" : "requester_id",
     "source2" : "15",
     "source3" : "default"
   }, {
     "target" : "patron_note_1",
     "source1" : "patron_note_1",
     "source2" : "16",
     "source3" : "default"
   }, {
     "target" : "patron_note_2",
     "source1" : "patron_note_2",
     "source2" : "17",
     "source3" : "default"
   }, {
     "target" : "item_material",
     "source1" : "item_material",
     "source2" : "18",
     "source3" : "default"
   }, {
     "target" : "item_description",
     "source1" : "item_description",
     "source2" : "19",
     "source3" : "default"
   }, {
     "target" : "main_location_name",
     "source1" : "main_location_name",
     "source2" : "20",
     "source3" : "default"
   }, {
     "target" : "secondary_location_name",
     "source1" : "secondary_location_name",
     "source2" : "23",
     "source3" : "default"
   }, {
     "target" : "call_number",
     "source1" : "call_number",
     "source2" : "24",
     "source3" : "default"
   }, {
     "target" : "call_number_2",
     "source1" : "call_number_2",
     "source2" : "25",
     "source3" : "default"
   }, {
     "target" : "item_category_name",
     "source1" : "item_category_name",
     "source2" : "27",
     "source3" : "default"
   }, {
     "target" : "item_status_name",
     "source1" : "item_status_name",
     "source2" : "28",
     "source3" : "default"
   }, {
     "target" : "item_barcode",
     "source1" : "item_barcode",
     "source2" : "29",
     "source3" : "default"
   }, {
     "target" : "request_id",
     "source1" : "request_id",
     "source2" : "30",
     "source3" : "default"
   }, {
     "target" : "group_id",
     "source1" : "group_id",
     "source2" : "31",
     "source3" : "default"
   } ],
   "Voice Search Languages Activation" : [ ],
   "General Configuration" : [ {
     "target" : "dd/MM/yyyy",
     "source1" : "Short_Date_Format"
   }, {
     "target" : "dd/MM/yyyy",
     "source1" : "Long_Date_Format"
   } ],
   "consortia member codes" : [ ],
   "get it prefilter locations" : [ ],
   "Auto Complete Configuration" : [ {
     "target" : "01BC_INST",
     "source1" : "1c01a6b0-94cd-4540-8d5f-ac06fb32ed96",
     "source2" : "06/29/21"
   } ],
   "Main Menu URLs for the New UI" : [ ],
   "direct linking config" : [ {
     "target" : "enableDirectLinking",
     "source1" : "NO"
   }, {
     "target" : "enableDirectLinkingWhenMultipleServicesAreAvailable",
     "source1" : "false"
   }, {
     "target" : "authenticationNote",
     "source1" : "false"
   }, {
     "target" : "publicNote",
     "source1" : "false"
   }, {
     "target" : "disableDirectLinkingForDatabases",
     "source1" : "true"
   }, {
     "target" : "disableDirectLinkingForDigital",
     "source1" : "false"
   }, {
     "target" : "disableDirectLinkingForJournals",
     "source1" : "false"
   } ],
   "Citation styles" : [ {
     "target" : "harvard-kings-college-london",
     "source1" : "5"
   }, {
     "target" : "apa",
     "source1" : "2"
   }, {
     "target" : "turabian-fullnote-bibliography",
     "source1" : "3"
   }, {
     "target" : "modern-language-association-7th-edition",
     "source1" : "1"
   }, {
     "target" : "modern-language-association",
     "source1" : "4"
   }, {
     "target" : "applied-clay-science",
     "source1" : "6"
   } ],
   "Export RIS encodings" : [ {
     "target" : "UTF-8",
     "source1" : "UTF-8"
   }, {
     "target" : "ISO-8859-1",
     "source1" : "ISO-8859-1"
   }, {
     "target" : "US-ASCII",
     "source1" : "US-ASCII"
   }, {
     "target" : "windows-1251",
     "source1" : "windows-1251"
   } ],
   "Recall Optional Request Parameters" : [ {
     "target" : "No",
     "source1" : "default",
     "source2" : "last_interest_date"
   }, {
     "target" : "No",
     "source1" : "default",
     "source2" : "patron_note_1"
   } ],
   "Hold/Recall Request Detailed Display" : [ {
     "target" : "hold_date",
     "source1" : "hold_date",
     "source2" : "6",
     "source3" : "default"
   }, {
     "target" : "end_hold_date",
     "source1" : "end_hold_date",
     "source2" : "7",
     "source3" : "default"
   }, {
     "target" : "pickup_location_name",
     "source1" : "pickup_location_name",
     "source2" : "8",
     "source3" : "default"
   }, {
     "target" : "hold_status",
     "source1" : "hold_status",
     "source2" : "5",
     "source3" : "default"
   }, {
     "target" : "request_author",
     "source1" : "request_author",
     "source2" : "12",
     "source3" : "default"
   }, {
     "target" : "request_title",
     "source1" : "request_title",
     "source2" : "13",
     "source3" : "default"
   }, {
     "target" : "request_pages",
     "source1" : "request_pages",
     "source2" : "14",
     "source3" : "default"
   }, {
     "target" : "patron_note_1",
     "source1" : "patron_note_1",
     "source2" : "15",
     "source3" : "default"
   }, {
     "target" : "patron_note_2",
     "source1" : "patron_note_2",
     "source2" : "16",
     "source3" : "default"
   }, {
     "target" : "item_description",
     "source1" : "item_description",
     "source2" : "17",
     "source3" : "default"
   }, {
     "target" : "main_location_name",
     "source1" : "main_location_name",
     "source2" : "19",
     "source3" : "default"
   }, {
     "target" : "secondary_location_name",
     "source1" : "secondary_location_name",
     "source2" : "21",
     "source3" : "default"
   }, {
     "target" : "call_number",
     "source1" : "call_number",
     "source2" : "22",
     "source3" : "default"
   }, {
     "target" : "call_number_2",
     "source1" : "call_number_2",
     "source2" : "23",
     "source3" : "default"
   }, {
     "target" : "item_category_name",
     "source1" : "item_category_name",
     "source2" : "25",
     "source3" : "default"
   }, {
     "target" : "item_status_name",
     "source1" : "item_status_name",
     "source2" : "26",
     "source3" : "default"
   }, {
     "target" : "request_date",
     "source1" : "request_date",
     "source2" : "27",
     "source3" : "default"
   }, {
     "target" : "end_request_date",
     "source1" : "end_request_date",
     "source2" : "28",
     "source3" : "default"
   }, {
     "target" : "request_id",
     "source1" : "request_id",
     "source2" : "29",
     "source3" : "default"
   }, {
     "target" : "group_id",
     "source1" : "group_id",
     "source2" : "30",
     "source3" : "default"
   }, {
     "target" : "requester_id",
     "source1" : "requester_id",
     "source2" : "11",
     "source3" : "default"
   }, {
     "target" : "ils_institution_name",
     "source1" : "ils_institution_name",
     "source2" : "10",
     "source3" : "default"
   }, {
     "target" : "request_type",
     "source1" : "request_type",
     "source2" : "1",
     "source3" : "default"
   }, {
     "target" : "request_type_recall",
     "source1" : "request_type_recall",
     "source2" : "1",
     "source3" : "default"
   }, {
     "target" : "author",
     "source1" : "author",
     "source2" : "2",
     "source3" : "default"
   }, {
     "target" : "title",
     "source1" : "title",
     "source2" : "3",
     "source3" : "default"
   }, {
     "target" : "year",
     "source1" : "year",
     "source2" : "4",
     "source3" : "default"
   } ],
   "Holdings Record Configuration" : [ {
     "target" : "852 ## z",
     "source1" : "default",
     "source2" : "loc.notes",
     "source3" : "ALMA_01",
     "source4" : "5"
   }, {
     "target" : "541 ## a",
     "source1" : "default",
     "source2" : "loc.acq.status",
     "source3" : "ALMA_01",
     "source4" : "6"
   }, {
     "target" : "561 ## a",
     "source1" : "default",
     "source2" : "loc.addnote2",
     "source3" : "ALMA_01",
     "source4" : "7"
   }, {
     "target" : "563 ## a",
     "source1" : "default",
     "source2" : "loc.addnote3",
     "source3" : "ALMA_01",
     "source4" : "8"
   }, {
     "target" : "866 ## az",
     "source1" : "default",
     "source2" : "loc.summary",
     "source3" : "ALMA_01",
     "source4" : "1"
   }, {
     "target" : "867 ## az",
     "source1" : "default",
     "source2" : "loc.summary_supp",
     "source3" : "ALMA_01",
     "source4" : "2"
   }, {
     "target" : "868 ## az",
     "source1" : "default",
     "source2" : "loc.summary_index",
     "source3" : "ALMA_01",
     "source4" : "3"
   }, {
     "target" : "852 ## t",
     "source1" : "default",
     "source2" : "loc.addnote1",
     "source3" : "ALMA_01",
     "source4" : "4"
   } ],
   "Institution Base URLs" : [ {
     "target" : "http://1.1.1.1",
     "source1" : "01BC_INST",
     "source2" : "ils_base"
   }, {
     "target" : "http://1.1.1.1",
     "source1" : "01BC_INST",
     "source2" : "api_base"
   } ]
 },
 "authentication" : [ {
   "profile-name" : "Alma",
   "authentication-system" : "ALMA",
   "silent-login-enabled" : "false"
 }, {
   "profile-name" : "saml",
   "authentication-system" : "SAML",
   "silent-login-enabled" : "false"
 }, {
   "profile-name" : "saml2",
   "authentication-system" : "SAML",
   "silent-login-enabled" : "false"
 }, {
   "profile-name" : "social",
   "authentication-system" : "SOCIAL_VIA_ALMA",
   "silent-login-enabled" : "false"
 } ],
 "scopes-context-map" : {
   "CentralIndex" : "C",
   "MyInst_and_CI" : "B",
   "WorldCat" : "C",
   "jsearch_scope" : "L",
   "Ebsco" : "C",
   "MyInstitution" : "L"
 },
 "backend_system" : "suprima",
 "customization" : {
   "resourceIcons" : { },
   "additionalLocationIcons" : { },
   "staticHtml" : { }
 },
 "UIComponents" : {
   "1359335360UI" : {
     "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
     "type" : {
       "_string" : "language"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
     "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
   },
   "1603838997UI" : {
     "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
     "type" : {
       "_string" : "mediaType"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
     "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
   },
   "drStartYear" : {
     "indexFields" : [ "cdate" ],
     "type" : {
       "_string" : "drStartYear"
     },
     "defaultOption" : "",
     "displayOptions" : [ ],
     "options" : [ ]
   },
   "boolOperator" : {
     "indexFields" : [ "AND", "OR", "NOT" ],
     "type" : {
       "_string" : "boolOperator"
     },
     "defaultOption" : "AND",
     "displayOptions" : [ "AND", "OR", "NOT" ],
     "options" : [ "AND", "OR", "NOT" ]
   },
   "drStartDay" : {
     "indexFields" : [ "cdate" ],
     "type" : {
       "_string" : "drStartDay"
     },
     "defaultOption" : "start_day",
     "displayOptions" : [ "start_day", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ],
     "options" : [ "start_day", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ]
   },
   "drEndMonth" : {
     "indexFields" : [ "cdate" ],
     "type" : {
       "_string" : "drEndMonth"
     },
     "defaultOption" : "end_month",
     "displayOptions" : [ "end_month", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ],
     "options" : [ "end_month", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]
   },
   "1062924795UI" : {
     "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
     "type" : {
       "_string" : "language"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
     "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
   },
   "1093446969UI" : {
     "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
     "type" : {
       "_string" : "language"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
     "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
   },
   "1752558978UI" : {
     "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
     "type" : {
       "_string" : "precisionOperator"
     },
     "defaultOption" : "contains",
     "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
     "options" : [ "contains", "exact", "begins_with", "equals" ]
   },
   "383891910UI" : {
     "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
     "type" : {
       "_string" : "precisionOperator"
     },
     "defaultOption" : "contains",
     "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
     "options" : [ "contains", "exact", "begins_with", "equals" ]
   },
   "drEndDay" : {
     "indexFields" : [ "cdate" ],
     "type" : {
       "_string" : "drEndDay"
     },
     "defaultOption" : "end_day",
     "displayOptions" : [ "end_day", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ],
     "options" : [ "end_day", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31" ]
   },
   "1900249562UI" : {
     "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
     "type" : {
       "_string" : "mediaType"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
     "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
   },
   "304895681UI" : {
     "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
     "type" : {
       "_string" : "language"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
     "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
   },
   "575740687UI" : {
     "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
     "type" : {
       "_string" : "precisionOperator"
     },
     "defaultOption" : "contains",
     "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
     "options" : [ "contains", "exact", "begins_with", "equals" ]
   },
   "1265374870UI" : {
     "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
     "type" : {
       "_string" : "language"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
     "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
   },
   "792079789UI" : {
     "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
     "type" : {
       "_string" : "precisionOperator"
     },
     "defaultOption" : "contains",
     "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
     "options" : [ "contains", "exact", "begins_with", "equals" ]
   },
   "drStartMonth" : {
     "indexFields" : [ "cdate" ],
     "type" : {
       "_string" : "drStartMonth"
     },
     "defaultOption" : "start_month",
     "displayOptions" : [ "start_month", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ],
     "options" : [ "start_month", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]
   },
   "drEndYear" : {
     "indexFields" : [ "cdate" ],
     "type" : {
       "_string" : "drEndYear"
     },
     "defaultOption" : "",
     "displayOptions" : [ ],
     "options" : [ ]
   },
   "606262861UI" : {
     "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
     "type" : {
       "_string" : "precisionOperator"
     },
     "defaultOption" : "contains",
     "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
     "options" : [ "contains", "exact", "begins_with", "equals" ]
   },
   "1634361171UI" : {
     "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
     "type" : {
       "_string" : "mediaType"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
     "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
   },
   "350360274UI" : {
     "indexFields" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
     "type" : {
       "_string" : "scope"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
     "options" : [ "any", "title", "creator", "sub", "issn", "user_tags" ]
   },
   "872151252UI" : {
     "indexFields" : [ "contains", "exact", "begins_with", "equals" ],
     "type" : {
       "_string" : "precisionOperator"
     },
     "defaultOption" : "contains",
     "displayOptions" : [ "contains", "exact", "startswith", "equalsPhrase" ],
     "options" : [ "contains", "exact", "begins_with", "equals" ]
   },
   "2020617340UI" : {
     "indexFields" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
     "type" : {
       "_string" : "scope"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
     "options" : [ "any", "title", "creator", "sub", "issn", "user_tags" ]
   },
   "236018521UI" : {
     "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
     "type" : {
       "_string" : "mediaType"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
     "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
   },
   "1411990220UI" : {
     "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
     "type" : {
       "_string" : "mediaType"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
     "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
   },
   "871076018UI" : {
     "indexFields" : [ "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang", "lang" ],
     "type" : {
       "_string" : "language"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ],
     "options" : [ "any", "ara", "cze", "chi", "dan", "dut", "eng", "fre", "ger", "gre", "heb", "ita", "jpn", "kor", "lat", "nor", "por", "rus", "spa", "swe", "tur" ]
   },
   "freeText" : {
     "indexFields" : [ "any" ],
     "type" : { },
     "defaultOption" : "",
     "displayOptions" : [ ],
     "options" : [ ]
   },
   "610118915UI" : {
     "indexFields" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
     "type" : {
       "_string" : "scope"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
     "options" : [ "any", "title", "creator", "sub", "issn", "user_tags" ]
   },
   "1977939391UI" : {
     "indexFields" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
     "type" : {
       "_string" : "scope"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
     "options" : [ "any", "title", "creator", "sub", "issn", "user_tags" ]
   },
   "1786090614UI" : {
     "indexFields" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
     "type" : {
       "_string" : "scope"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
     "options" : [ "any", "title", "creator", "sub", "issn", "user_tags" ]
   },
   "724460668UI" : {
     "indexFields" : [ "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype", "rtype" ],
     "type" : {
       "_string" : "mediaType"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ],
     "options" : [ "any", "journals", "books", "articles", "images", "audios", "videos", "dissertations" ]
   },
   "2008461565UI" : {
     "indexFields" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
     "type" : {
       "_string" : "scope"
     },
     "defaultOption" : "any",
     "displayOptions" : [ "any", "title", "creator", "sub", "issn", "user_tags" ],
     "options" : [ "any", "title", "creator", "sub", "issn", "user_tags" ]
   }
 },
 "queryTerms" : {
   "01BC_INST:Auto1.language.Ebsco" : [ "1062924795UI" ],
   "01BC_INST:Auto1.prescisionOperators.LibraryCatalog" : [ "792079789UI" ],
   "01BC_INST:Auto1.mediaType.CentralIndex" : [ "1900249562UI" ],
   "01BC_INST:Auto1.prescisionOperators.jsearch_slot" : [ "383891910UI" ],
   "01BC_INST:Auto1.language.Everything" : [ "1265374870UI" ],
   "01BC_INST:Auto1.prescisionOperators.CentralIndex" : [ "872151252UI" ],
   "01BC_INST:Auto1.mediaType.Everything" : [ "724460668UI" ],
   "01BC_INST:Auto1.language.CentralIndex" : [ "1359335360UI" ],
   "01BC_INST:Auto1.language.worldcat" : [ "1093446969UI" ],
   "01BC_INST:Auto1.mediaType.worldcat" : [ "1634361171UI" ],
   "01BC_INST:Auto1.date_range.worldcat" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ],
   "01BC_INST:Auto1.searchbox_complex.Ebsco" : [ "freeText", "boolOperator", "1977939391UI", "575740687UI" ],
   "01BC_INST:Auto1.searchbox_complex.Everything" : [ "freeText", "boolOperator", "350360274UI", "1752558978UI" ],
   "01BC_INST:Auto1.searchbox_complex.worldcat" : [ "freeText", "boolOperator", "2008461565UI", "606262861UI" ],
   "01BC_INST:Auto1.date_range.jsearch_slot" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ],
   "01BC_INST:Auto1.prescisionOperators.Ebsco" : [ "575740687UI" ],
   "01BC_INST:Auto1.date_range.Everything" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ],
   "01BC_INST:Auto1.language.jsearch_slot" : [ "871076018UI" ],
   "01BC_INST:Auto1.searchbox_complex.CentralIndex" : [ "freeText", "boolOperator", "2020617340UI", "872151252UI" ],
   "01BC_INST:Auto1.prescisionOperators.worldcat" : [ "606262861UI" ],
   "01BC_INST:Auto1.prescisionOperators.Everything" : [ "1752558978UI" ],
   "01BC_INST:Auto1.searchbox_complex.LibraryCatalog" : [ "freeText", "boolOperator", "610118915UI", "792079789UI" ],
   "01BC_INST:Auto1.date_range.CentralIndex" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ],
   "01BC_INST:Auto1.date_range.Ebsco" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ],
   "01BC_INST:Auto1.mediaType.jsearch_slot" : [ "1411990220UI" ],
   "01BC_INST:Auto1.language.LibraryCatalog" : [ "304895681UI" ],
   "01BC_INST:Auto1.mediaType.Ebsco" : [ "1603838997UI" ],
   "01BC_INST:Auto1.searchbox_complex.jsearch_slot" : [ "freeText", "boolOperator", "1786090614UI", "383891910UI" ],
   "01BC_INST:Auto1.mediaType.LibraryCatalog" : [ "236018521UI" ],
   "01BC_INST:Auto1.date_range.LibraryCatalog" : [ "drStartDay", "drStartMonth", "drStartYear", "drEndDay", "drEndMonth", "drEndYear" ]
 },
 "bx-enable" : false,
 "tab-to-tiles" : {
   "Everything" : [ "01BC_INST:Auto1.FacetTileInterface.Everything", "01BC_INST:Auto1.KeepingItemTileInterface.Everything", "01BC_INST:Auto1.SearchTileInterface-Advanced.Everything", "01BC_INST:Auto1.ResultFullTileInterface.Everything", "01BC_INST:Auto1.ResultTileInterface.Everything", "01BC_INST:Auto1.LocationsTileInterface.Everything", "01BC_INST:Auto1.SearchTileInterface-Simple.Everything" ],
   "CentralIndex" : [ "01BC_INST:Auto1.FacetTileInterface.CentralIndex", "01BC_INST:Auto1.KeepingItemTileInterface.CentralIndex", "01BC_INST:Auto1.SearchTileInterface-Advanced.CentralIndex", "01BC_INST:Auto1.ResultFullTileInterface.CentralIndex", "01BC_INST:Auto1.ResultTileInterface.CentralIndex", "01BC_INST:Auto1.LocationsTileInterface.CentralIndex", "01BC_INST:Auto1.SearchTileInterface-Simple.CentralIndex" ],
   "jsearch_slot" : [ "01BC_INST:Auto1.FacetTileInterface.jsearch_slot", "01BC_INST:Auto1.KeepingItemTileInterface.jsearch_slot", "01BC_INST:Auto1.SearchTileInterface-Advanced.jsearch_slot", "01BC_INST:Auto1.ResultFullTileInterface.jsearch_slot", "01BC_INST:Auto1.ResultTileInterface.jsearch_slot", "01BC_INST:Auto1.LocationsTileInterface.jsearch_slot", "01BC_INST:Auto1.SearchTileInterface-Simple.jsearch_slot" ],
   "Ebsco" : [ "01BC_INST:Auto1.FacetTileInterface.Ebsco", "01BC_INST:Auto1.KeepingItemTileInterface.Ebsco", "01BC_INST:Auto1.SearchTileInterface-Advanced.Ebsco", "01BC_INST:Auto1.ResultFullTileInterface.Ebsco", "01BC_INST:Auto1.ResultTileInterface.Ebsco", "01BC_INST:Auto1.LocationsTileInterface.Ebsco", "01BC_INST:Auto1.SearchTileInterface-Simple.Ebsco" ],
   "worldcat" : [ "01BC_INST:Auto1.FacetTileInterface.worldcat", "01BC_INST:Auto1.KeepingItemTileInterface.worldcat", "01BC_INST:Auto1.SearchTileInterface-Advanced.worldcat", "01BC_INST:Auto1.ResultFullTileInterface.worldcat", "01BC_INST:Auto1.ResultTileInterface.worldcat", "01BC_INST:Auto1.LocationsTileInterface.worldcat", "01BC_INST:Auto1.SearchTileInterface-Simple.worldcat" ],
   "LibraryCatalog" : [ "01BC_INST:Auto1.FacetTileInterface.LibraryCatalog", "01BC_INST:Auto1.KeepingItemTileInterface.LibraryCatalog", "01BC_INST:Auto1.SearchTileInterface-Advanced.LibraryCatalog", "01BC_INST:Auto1.ResultFullTileInterface.LibraryCatalog", "01BC_INST:Auto1.ResultTileInterface.LibraryCatalog", "01BC_INST:Auto1.LocationsTileInterface.LibraryCatalog", "01BC_INST:Auto1.SearchTileInterface-Simple.LibraryCatalog" ]
 },
 "searchWithinJournalConfig" : {
   "tab" : "Everything",
   "scope" : "MyInst_and_CI"
 },
 "journal_tab" : "jsearch_slot",
 "institution-base-url" : "ALMA_OPENURL",
 "fieldsWithUseTranslation" : [ ],
 "summon_over_alma" : false,
 "rapido_sa_enabled" : false,
 "syndeticunbound-enable" : false,
 "enableSingleLogout" : false,
 "enableExtendSession" : false,
 "enableExtendSessionToMax" : false,
 "enableUserSettingForExtendSession" : false,
 "useEsploroFullAssetPage" : false,
 "useEsploroSearchPage" : false,
 "feature-flags" : {
   "display_CDI_document_attributes" : true,
   "mobile_viewer_fullview" : true,
   "new_pdfjs" : true,
   "exhibitions_creator" : false,
   "view_to_library_for_rta" : true,
   "highlight_the_record_you_came_from" : true,
   "bulk_export" : true,
   "may_also_be_held_by_enhancement" : true,
   "filter_by_all_fines_types_in_my_library_card" : true,
   "configuration_to_use_filtered_or_expand_search_for_citation_trail" : true,
   "personal_delivery_addresses" : true,
   "add_search_to_favorites" : true,
   "digital_viewer_supporting_office_documents" : true,
   "enable_patrons_to_check_keep_me_signed_in" : true,
   "epub_via_alma_viewer" : true,
   "direct_login" : true,
   "cm_override_winpop" : true,
   "primo_ve_handle_autocomplete_request_punctuation" : true,
   "split_configuration_for_hypertext_linking_uses_exact_and_only" : true
 },
 "country-codes" : [ "ABW", "AFG", "AGO", "AIA", "ALA", "ALB", "AND", "ARE", "ARG", "ARM", "ASM", "ATA", "ATG", "AUS", "AUT", "AZE", "BDI", "BEL", "BEN", "BFA", "BGD", "BGR", "BHR", "BHS", "BIH", "BLM", "BLR", "BLZ", "BMU", "BOL", "BRA", "BRB", "BRN", "BTN", "BWA", "CAF", "CAN", "CHE", "CHL", "CHN", "CIV", "CMR", "COD", "COG", "COK", "COL", "COM", "CPV", "CRI", "CUB", "CUW", "CYM", "CYP", "CZE", "DEU", "DJI", "DMA", "DNK", "DOM", "DZA", "ECU", "EGY", "ERI", "ESH", "ESP", "EST", "ETH", "FIN", "FJI", "FLK", "FRA", "FRO", "FSM", "GAB", "GBR", "GEO", "GGY", "GHA", "GIB", "GIN", "GLP", "GMB", "GNB", "GNQ", "GRC", "GRD", "GRL", "GTM", "GUF", "GUM", "GUY", "HKG", "HND", "HRV", "HTI", "HUN", "IDN", "IND", "IRL", "IRN", "IRQ", "ISL", "ISR", "ITA", "JAM", "JOR", "JPN", "KAZ", "KEN", "KGZ", "KHM", "KIR", "KOR", "KWT", "LAO", "LBN", "LBR", "LBY", "LIE", "LKA", "LSO", "LTU", "LUX", "LVA", "MAC", "MAR", "MCO", "MDA", "MDG", "MDV", "MEX", "MHL", "MKD", "MLI", "MLT", "MMR", "MNE", "MNG", "MOZ", "MRT", "MSR", "MTQ", "MUS", "MWI", "MYS", "NAM", "NCL", "NER", "NFK", "NGA", "NIC", "NIU", "NLD", "NOR", "NPL", "NRU", "NZL", "OMN", "PAK", "PAN", "PCN", "PER", "PHL", "PLW", "PNG", "POL", "PRI", "PRK", "PRT", "PRY", "PYF", "QAT", "ROU", "RUS", "RWA", "SAU", "SDN", "SEN", "SGP", "SLB", "SLE", "SLV", "SMR", "SOM", "SRB", "SUR", "SVK", "SVN", "SWE", "SWZ", "SYC", "SYR", "TCD", "TGO", "THA", "TJK", "TKL", "TKM", "TLS", "TON", "TTO", "TUN", "TUR", "TUV", "TWN", "TZA", "UGA", "UKR", "URY", "USA", "UZB", "VAT", "VCT", "VEN", "VGB", "VIR", "VNM", "VUT", "WLF", "WSM", "YEM", "ZAF", "ZMB", "ZWE" ],
 "discovery_services_page" : false,
 "discovery_local_no_login" : false,
 "discovery_with_external_no_login" : false,
 "limited_patrons_in_alma_starter" : false,
 "IsViewNdeEnabled" : false,
 "enable_mixpanel" : false
};


constructor(){
  this.differences = this.compareJSON(this.json1, this.json2);
  console.log(this.differences , "Differences");
}


 compareJSON(obj1: any, obj2: any, path: string = ''): { path: string, value1: any, value2: any }[] {
  const differences: { path: string, value1: any, value2: any }[] = [];

  const formatPath = (key: string) => (path ? `${path}.${key}` : key);

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      if (obj1 !== obj2) {
          differences.push({ path, value1: obj1, value2: obj2 });
      }

      return differences;
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) {
          differences.push({ path, value1: obj1.length, value2: obj2.length });
      }
      const len = Math.max(obj1.length, obj2.length);
      for (let i = 0; i < len; i++) {
          differences.push(...this.compareJSON(obj1[i], obj2[i], `${path}[${i}]`));
      }
      return differences;
  } else if (Array.isArray(obj1) || Array.isArray(obj2)) {
      differences.push({ path, value1: obj1, value2: obj2 });
      return differences;
  }

  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  keys.forEach(key => {
      if (!(key in obj1)) {
          differences.push({ path: formatPath(key), value1: 'not exists', value2: 'exists' });
      } else if (!(key in obj2)) {
          differences.push({ path: formatPath(key), value1: 'exists', value2: 'not exists' });
      } else {
          differences.push(...this.compareJSON(obj1[key], obj2[key], formatPath(key)));
      }
  });

  return differences;
}

 generateDifferenceTable(differences: { path: string, value1: any, value2: any }[]): string {
  let table = '<table border="1">';
  table += '<tr><th>Path</th><th>Value in JSON 1</th><th>Value in JSON 2</th></tr>';
  
  differences.forEach(diff => {
      table += `<tr><td>${diff.path}</td><td>${JSON.stringify(diff.value1)}</td><td>${JSON.stringify(diff.value2)}</td></tr>`;
  });

  table += '</table>';
  return table;
}
}
