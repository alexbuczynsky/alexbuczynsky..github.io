import React from 'react';

import { Project } from '../Project'
import {
  Typography,
  Link,
  Divider,
  GridList,
  GridListTile,
  makeStyles,
  IconButton,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { YoutubeVideo } from '../../../components/YoutubeVideo'

export const SmartGearMobileProject: React.FC = () => {
  return (
    <Project title='Siemens Sm@rtGear Mobile'>
      <img
        alt="Sm@rtGearTM Technology"
        src="https://assets.new.siemens.com/siemens/assets/api/uuid:f26216e1-334d-41be-ad93-dd2ebe219690/width:750/quality:high/version:1566430192/smrtmobilefigure1.png"
        width="526px" />

      <Typography variant='body1'>
        Siemens is expanding its Sm@rtGear portfolio to include mobile devices. Sm@rtGear Mobile allows
        the user to interface with their gear using an Apple or Android device; and to remotely monitor,
        configure, and control the equipment wirelessly or via hardwired connection using a mobile phone
        or tablet. The application works with switchboards, low voltage switchgear, and power panels.
        Supported intelligent devices include digital meters (PAC, 9410 and 9810),
        VL breakers, WL breakers, and SEM3 sub-metering.
      </Typography>
      <br />

    </Project>
  )
}