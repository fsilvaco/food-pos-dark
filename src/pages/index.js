import Grid from '../components/layout/grid'
import { Main } from '../patterns/main'
import { NavigationLeft } from '../patterns/navigation-left'
import { Order } from '../patterns/order'

export default function Home() {
  return (
    <Grid>
      <NavigationLeft />
      <Main />
      <Order />
    </Grid>
  )
}
