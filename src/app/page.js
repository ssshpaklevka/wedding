import Header from "./components/header/page"
import Invite from "./components/invite/page"
import Calendar from "./components/calendar/page"
import Map from "./components/map/page"
import Program from "./components/program/page"
import DressCode from "./components/dressCode/page"
import Questionnarie from "./components/questionnaire/page"
import Waiting from "./components/waiting/page"
import Wave from "./components/invite/wave"
import WaveBottomCalendar from "./components/waves/waveBottomCalendar"
import WaveBottomMap from "./components/waves/waveBottomMap"
import WaveUpDate from "./components/waves/waveUpDate"

export default function Home() {
  return (
    <div>
      <Header />
      <Invite />
      <br />
      <Wave />
      <Calendar />
      <br />
      <Wave />

      <WaveBottomCalendar />

      <Map />
      <br />
      <WaveBottomMap />
      <br />
      <Program />

      <br />
      <br />
      <Wave />

      <DressCode />

      <WaveUpDate />

      <Wave />

      <Questionnarie />

      <Wave />

      <Waiting />
    </div>
  )
}
