window.PROJECT = {"name":"Together We Listen @ NYPL","description":"A web app for fixing oral history transcripts that were automatically generated from speech-to-text software","logo":"/project/assets/img/logo.png","api_url":"","use_vendor_audio":true,"auth_providers":[{"name":"google","label":"Google","path":"/auth/google_oauth2"}],"menus":{"header":[{"label":"Browse","url":"/"},{"label":"Introduction","url":"/#/page/intro.md"}],"footer":[]},"controls":[{"id":"toggle-play","action":"lineToggle","label":"Play/Pause/Re-play","keyCode":9,"key":"tab","keyLabel":"Press tab key to play, pause, or re-play a line"},{"id":"submit-line","action":"lineSubmit","label":"Submit \u0026amp; Continue","keyCode":13,"key":"enter","keyLabel":"Press enter key to submit current line and continue"},{"id":"previous-line","action":"linePrevious","label":"Prev Line","keyCode":38,"key":"\u0026#8593;","keyLabel":"Press up arrow key to go to previous line"},{"id":"next-line","action":"lineNext","label":"Next Line","keyCode":40,"key":"\u0026#8595;","keyLabel":"Press down arrow key to go to next line"},{"id":"previous-word","action":"wordPrevious","label":"Prev Word","keyCode":37,"key":"Shift + \u0026#8592;","keyLabel":"Hold shift and press left arrow key to move to previous word","shift":true},{"id":"next-word","action":"wordNext","label":"Next Word","keyCode":39,"key":"Shift + \u0026#8594;","keyLabel":"Hold shift and press right arrow key to move to next word","shift":true}],"pages":{"home.md":"\u003ch1\u003eTogether We Listen @ NYPL\u003c/h1\u003e\n\n\u003cp\u003eHelp \u003ca href=\"http://www.nypl.org/\"\u003eThe New York Public Library\u003c/a\u003e fix computer-generated transcripts from 1000+ hours of stories from the library\u0026#39;s \u003ca href=\"http://oralhistory.nypl.org/\"\u003eCommunity Oral History Project\u003c/a\u003e.\u003c/p\u003e\n","intro.md":"\u003ch1\u003eIntroduction\u003c/h1\u003e\n\n\u003cp\u003eAn introduction to this project is coming soon...\u003c/p\u003e\n","transcript_edit.md":"\u003ch2\u003eYou are now editing a transcript:\u003c/h2\u003e\n\n\u003ch1\u003e\u003c%= transcript.title %\u003e\u003c/h1\u003e\n\n\u003cp\u003eThe following transcript was generated using speech-to-text software, so there are probably errors. This tool will allow you to listen while you edit the transcript. For your convenience (we hope), the audio will automatically pause after each line.\u003c/p\u003e\n\n\u003cp\u003eUse the keyboard shortcuts or buttons in the toolbar above to navigate the transcript and audio. \u003cspan class=\"highlight\"\u003eAll your edits will be automatically saved\u003c/span\u003e but may not be immediately visible by others. Once enough people agree on the text of a particular line, that line will be visible to all and no longer editable.\u003c/p\u003e\n\n\u003cp class=\"text-center\"\u003e\u003ca class=\"button large start-play\"\u003eOkay, let's start\u003c/a\u003e\u003c/p\u003e\n"}};