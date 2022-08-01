# iceportal mining

mines `https://iceportal.de/api1/rs/status`, `https://iceportal.de/bap/api/bap-service-status`, `https://iceportal.de/api1/rs/tripInfo/trip`

**ONLY WORKS WHILE IN THE `ẀIFIonICE` and `ẀIFI@DB` networks (on an ICE)**

Contains:

all descriptions are just from context

### main data:

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
  - currentState string (can be "HIGH", "NO_INFO")
  - nextState string  (can be "UNSTABLE", null)
  - remainingTimeSeconds int (can be null, until flip to nextState probably (is not updated on the second))
- bapInstalled bool

### bap:

- bapServiceStatus string (can be "INACTIVE")
- status bool

### trip:

- trip:
  - tipDate string (date in `yyyy-mm-dd`)
  - trainType string (can be "ICE")
  - vzn string (is just numbers e.g. "2926")
  - actualPosition int
  - distanceFromLastStop int (can be 0)
  - totalDistance int
  - stepInfo:
  	- scheduledNext string
  	- actualNext string
  	- actualLast string
  	- actualLastStarted string
  	- finalStationName string (e.g. "Essen Hbf")
  	- finalStationEvaNr string
  - stop:
    - 0: (iterates from 0 to `i` where 0 is first stop and `i` is last)
      - station:
        - evaNr string
        - name string (e.g. "München Hbf")
        - code null
      - geocoordinates:
        - latitude float
        - longitude float
      - timetable:
        - scheduledArivalTime (can be null)
        - actualArivalTime (can be null)
        - showActualArivalTime (can be null)
        - arivalDelay string (can be "")
        - scheduledDepartureTime int (in unix millis with last 3 digets 0s)
        - actualDepartureTime int (in unix millis with last 3 digets 0s)
        - showActualDeparture bool
        - departureDelay string (e.g. "+31" (in minutes))
      - track:
        - scheduled string (e.g. "23")
        - actual string (e.g. "23")
      - info:
        - status int (can be 0)
        - passed bool (if train has already passed this stop)
        - positionStatus string (can be "passed", "future")
        - distance int (can be 0 when passed)
        - distanceFromStart int (can be 0 at start)
      - delayReasons:
        - 0: (iterates from 0 to i where 0 is first and i is last entry)
          - code string (e.g. "47")
          - text string (e.g. ""verspätete Bereitstellung des Zuges")
- connection:
  - trainType null
  - vzn null
  - trainNumber null
  - station null
  - timetable null
  - track null
  - info null
  - stops null
  - conflict string (can be "NO_CONFLICT")
- active null


(*\*\*\* wagonClass: for me it was accurate but I was at the center of the wagon)
