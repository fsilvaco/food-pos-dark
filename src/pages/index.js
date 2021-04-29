import Grid from '../components/Layout/Grid'
import { Main } from '../components/Main/Main'
import { NavBar } from '../components/Navigation/NavBar'
import { Orders } from '../components/Orders'

export default function Home() {
  return (
    <Grid>
      <NavBar />
      <Main />
      <Orders />
    </Grid>
  )
}
