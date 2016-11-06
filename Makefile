SRC = src
DIST = dist
ASSETS = assets

MAIN = $(SRC)/Main.elm

build: compile index deps
full: clean build


compile:
	elm-make $(MAIN) --output=$(DIST)/app.js

index:
	-cp $(SRC)/index.html $(DIST)/index.html

deps:
	-cp -R $(ASSETS)/* $(DIST)/


clean:
	-rm -rf $(DIST)
	-rm -rf elm-stuff/


reactor:
	elm-reactor
