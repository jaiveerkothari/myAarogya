# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Monitor"
      id: "Monitor"
      location: "example#monitorHealth"
    }
    {
      title: "Preferences"
      id: "settings"
      location: "example#settings"
    }
    {
      title: "Symptoms"
      id: "Symptoms"
      location: "example#symptoms"
    }
    {
      title: "Research"
      id: "Research"
      location: "example#research"
    }
    
  ]

  # rootView:
  #   location: "example#getting-started"

  preloads: [
    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  initialView:
     id: "initialView"
     location: "example#login"
