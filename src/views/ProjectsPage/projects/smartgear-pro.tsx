import React from 'react';

import Typography from '@material-ui/core/Typography'
import { Project } from '../Project'
import { YoutubeVideo } from '../../../components/YoutubeVideo'

export const SmartGearProProject: React.FC = () => {
  return (
    <Project title='Siemens Sm@rtGear Pro'>
      <img
        alt="Sm@rtGearTM Technology"
        src="https://assets.new.siemens.com/siemens/assets/api/uuid:1a1739fc-38e1-41c2-b53d-41c6377c0220/width:640/quality:high/version:1567171245/smarttechnology.png"
        width="526px" />

      <Typography variant='body1'>
        Intelligent devices (circuit breakers, relays, meters, etc.) have existed for more than 30 years.
        These devices are self-monitoring, configurable, and communicating, but individually they are only
        islands of intelligence. Historically integrated remote monitoring, configuration, and control have
        only been available with the inclusion of upstream PMCS, PCS, DCS, or SCADA systems. With the advent
        of Siemens Sma@rtGear™ technology, remote monitoring, configuration, and control are standard features
        that are integral to the electrical apparatus product.
      </Typography>
      <br />

      <YoutubeVideo width='100%' height='300px' videoURL='https://www.youtube.com/embed/MQfU_-69LzA' />

    </Project>
  )
}