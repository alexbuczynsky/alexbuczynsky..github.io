import React from 'react';

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider'

import { Project } from '../Project'
import { YoutubeVideo } from '../../../components/YoutubeVideo'

export const AudiAGVProject: React.FC = () => {
  return (
    <Project title='Audi Automated Guided Vehicle'>
      <Typography variant='body1'>
        The future is industry 4.0. Technology is getting progressively more complex and it only makes sense that the production process will also rise in complexity. At some point it is more efficient to fully automate the assembly process to pick up the slack created by repetitive task workers.

        I was involved in the development of an Automated Guided Vehicle (AGV) designed with the purpose of delivering parts to the assembly line.

        The Audi AGV is a natural feature recognition mobile robot. As an automated guided vehicle, it can navigate throughout busy and dynamic production environments while being safe for both other vehicles and persons. It provides this safety by a watchdog algorithm that monitors specified zones (e.g. a right of way or a one lane road) for trolleys that may be in the planned mission path. It also guarantees human safety by monitoring for objects entering into its path and automatically brakes before any collision.
          </Typography>
      <br />

      <YoutubeVideo width='100%' height='300px' videoURL='https://www.youtube.com/embed/e-uZFWph0wQ' />

      <Divider />

      <br />

      <Typography variant='h5'>
        News articles about the AGV project
          </Typography>

      <p>
        <Link href="https://www.youtube.com/embed/sqCbYd8O8MU?rel=0"> [Car TV] 2016 Audi Smart Factory – Future of Audi Production</Link>
        <br />
        <Link href="http://www.autocar.co.uk/car-news/motor-shows-la-motor-show/audi-predicts-death-production-line">[autocar.co.uk] Audi predicts the death of the production line</Link>
        <br />
        <Link href="http://www.automotiveit.eu/54697-2/news/id-0054697">[automotiveit] Audi zeigt die Produktion der Zukunft</Link>
      </p>

    </Project>
  )
}