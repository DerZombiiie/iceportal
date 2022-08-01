# iceportal mining

mines `https://iceportal.de/api1/rs/status`

**ONLY WORKS WHILE IN THE `ẀIFIonICE` networks**

Contains:

all descriptions are just from context

- connection bool
- serviceLevel string
- gpsStatus string (can be "VALID" (confirmed) and "INVALID" probably)
- internet string (can be "HIGH" (confirmed))
- latitude float
- longitude float
- tileY int
- tileX int
- series string (probably train model)
- serverTime int (unix millis)
- speed int (in km/h)
- trainType string (can be "ICE" (confirmed) and probably "IC", etc.)
- tzn string (train indentification e.g. "ICE9049")
- wagonClass string (class of the wagon the hotspot is in e.g. "SECOND")\*\*\*
- connectivity:
  - currentState string (can be "HIGH")
  - nextState string  (can be "UNSTABLE")
  - remainingTimeSeconds int (until flip to nextState probably (is not updated on the second))
- bapInstalled bool

(*\*\*\* wagonClass: for me it was accurate but I was at the center of the wagon)
