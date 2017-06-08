var myApp = angular.module("verbsModule", [])
myApp.controller("verbsController", function($scope) {
    good = "#0f0"
    bad = "#f00"
    neutre = "#fff"
    $scope.checkVerb = function(){
      $scope.status_fps = ($scope.firstPersonSingular == verbs[verbId][formaId][tempsId][0]) ? good : bad;
      $scope.status_sps = ($scope.secondPersonSingular == verbs[verbId][formaId][tempsId][1]) ? good : bad;
      $scope.status_tps = ($scope.ThirdPersonSingular == verbs[verbId][formaId][tempsId][2]) ? good : bad;
      $scope.status_fpp = ($scope.firstPersonPlural == verbs[verbId][formaId][tempsId][3]) ? good : bad;
      $scope.status_spp = ($scope.secondPersonPlural == verbs[verbId][formaId][tempsId][4]) ? good : bad;
      $scope.status_tpp = ($scope.ThirdPersonPlural == verbs[verbId][formaId][tempsId][5]) ? good : bad;

    }
    $scope.status_fps = neutre
    $scope.status_sps = neutre
    $scope.status_tps = neutre
    $scope.status_fpp = neutre
    $scope.status_spp = neutre
    $scope.status_tpp = neutre

    verbsOptions = ["cantar"]
    formaOptions = ["indicatiu","subjuntiu","imperatiu"]
    tempsOptions = []
    tempsOptions["indicatiu"] = ["present", "perfet", "imperfet", "plusquamperfet", "passat simple", "passat anterior simple", "passat perifràstic", "passat anterior perifràstic",
                    "futur simple", "futur perfet", "condicional","condicional perfet" ]
    tempsOptions["subjuntiu"]= ["present", "perfet", "imperfet", "plusquamperfet"]
    tempsOptions["imperatiu"] = ["present"]
    verbId = verbsOptions[Math.floor((Math.random() * verbsOptions.length) )]
    formaId = formaOptions[Math.floor((Math.random() * formaOptions.length))];
    tempsId = tempsOptions[formaId][Math.floor((Math.random() * tempsOptions[formaId].length))];
    $scope.verb = verbId
    $scope.tempsVerbal = tempsId
    $scope.formaVerbal = formaId

    verbs =
      { "cantar" :
          { "indicatiu":
              { "present": [ "canto", "cantes", "canta", "cantem", "canteu", "canten" ],
                "perfet": [ "he cantat", "has cantat", "ha cantat", "hem cantat", "heu cantat", "han cantat"],
                "imperfet": [ "cantava", "cantaves", "cantava", "cantàvem", "cantàveu", "cantaven"],
                "plusquamperfet": [ "havia cantat","havies cantat","havia cantat","havíem cantat","havíeu cantat","havien cantat" ],
                "passat simple": [ "cantí","cantares","cantà","cantàrem","cantàreu","cantaren" ],
                "passat anterior simple": ["haguí","hagueres","hagué","haguérem","haguéreu","hagueren"],
                "passat perifràstic": ["vaig cantar","vas cantar","va cantar","vam cantar","vau cantar","van cantar"],
                "passat anterior perifràstic": ["vaig cantar","vas cantar","va cantar","vam cantar","vau cantar","van cantar"],
                "futur simple": ["cantaré","cantaràs","cantarà","cantarem","cantareu","cantaran"],
                "futur perfet": ["hauré cantat","hauràs cantat","haurà cantat","haurem  cantat","haureu cantat","hauran cantat"],
                "condicional": ["cantaria","cantaries","cantaria","cantaríem","cantaríeu","cantarien"],
                "condicional perfet": ["hauria cantat","hauries cantat","hauria cantat","hauríem cantat","hauríeu cantat","haurien cantat"]
              },
            "subjuntiu":
            {
              "present": ["canti","cantis","canti","cantem","canteu","cantin"],
              "perfet": ["hagi cantat","hagis cantat","hagi cantat","hàgim cantat","hàgiu cantat","hagin cantat"],
              "imperfet": ["cantés","cantessis","cantés","cantéssim","cantéssiu","cantessin"],
              "plusquamperfet": ["hagués  cantat","haguessis  cantat","hagués  cantat","haguéssim  cantat","haguéssiu  cantat","haguessin cantat"]
            },
            "imperatiu":
            {
              "present": ["-","canta","canti","cantem","canteu","cantin"]
            }
          }
      };


});
