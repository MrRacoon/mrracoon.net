module Page.About exposing (view)

import List exposing (map)
import Html exposing (div, p, h1, h2, ul, li, text, a)
import Html.Attributes exposing (href)

view model =
  div []
    [ h1 [] [ text "Erik Sutherland" ]
    , h2 [] [ text "Things I dig:" ]
    , div []
      [ p [] [ text "Functional Programming (Haskell, Elm, Clojure, Ramda) " ]
      , p [] [ text "Psychology / Neurology / Behavioral Analysis" ]
      , p [] [ text "Go Karts" ]
      , p [] [ text "Rock / Oldies / EDM / Dub" ]
      , p [] [ text "Home Automation" ]
      ]
    , h2 [] [ text "Ways to find me:" ]
    , div []
      [ a [href "http://github.com/MrRacoon"] [ text "github" ]
      ]
    ]
