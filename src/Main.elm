module Main exposing (..)

import Html exposing (Html)
import Html.App exposing (program)
import Platform.Cmd exposing (Cmd)
import Platform.Sub exposing (Sub)

import Page.About as About

type alias Model = ()
type Msg = NoMsg

init : (Model, Cmd Msg)
init = ((), Cmd.none)

update : Msg -> Model -> (Model, Cmd Msg)
update msg model = model ! []

view : Model -> Html Msg
view = About.view

subscriptions : Model -> Sub Msg
subscriptions model = Sub.none

main = program
  { init          = init
  , update        = update
  , view          = view
  , subscriptions = subscriptions
  }
