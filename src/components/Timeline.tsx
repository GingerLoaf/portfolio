import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faEarthAmericas, faPhone } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { ListItem } from "@mui/material";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2018-2026 (8 yrs)"
            iconStyle={{ background: '#00ca40', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGamepad} />}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">WaveXR</h4>
            <p>
              Full-stack cross-functional engineering.
              Team leadership and mentorship.
              Tool and build pipeline engineering.
              Implemented robust delta compression system for live netcode.
              Created tools for broadcasting shows and tracking motion capture technologies.
              Created VR test/scripting solution called "mannequin" that could take control of the headset and drive real movement using scripts for automated and repeatable testing.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2016-2018 (2 yrs)"
            iconStyle={{ background: '#00ca40', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGamepad} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">WaveXR</h4>
            <p>
              Full-stack engineering.
              Team leadership and mentorship.
              Tool and build pipeline engineering.
              Built toolkit for assembling and performing live shows.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014-2016 (2 yrs)"
            iconStyle={{ background: '#00ca40', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGamepad} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer / Game Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">Portalarium</h4>
            <p>
              Worked on and designed new features for gathering, crafting, loot, internationalization, decorations, and multiplayer netcode.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2009-2014 (5 yrs)"
            iconStyle={{ background: '#0083ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faEarthAmericas} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">General Web Constracting</h4>
            <p>
              Contracted in the Austin TX area at RED Method, AppHustle, W2O Group, and Data Management Inc.
              Frontend design and implementation, React, MongoDB, TDD.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2009-2012 (3 yrs)"
            iconStyle={{ background: '#0083ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faEarthAmericas} />}
          >
            <h3 className="vertical-timeline-element-title">Sofware Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Data Management, Inc.</h4>
            <p>
              Worked on frontend for web apps.
              Owned and designed frontend for scheduler web app.
              Owned and designed frontend for iOS app. Practiced clean coding and test driven development practices.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2007-2009 (2 yrs)"
            iconStyle={{ background: '#ca00c7', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faPhone} />}
          >
            <h3 className="vertical-timeline-element-title">Support Technician</h3>
            <h4 className="vertical-timeline-element-subtitle">Data Management, Inc.</h4>
            <p>
              Customer assistance over the phone, created tools to help technicians troubleshoot more accurately.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;