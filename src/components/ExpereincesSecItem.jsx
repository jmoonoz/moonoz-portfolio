import React from 'react'
import { MdDesktopMac } from 'react-icons/md'
import PText from '../components/PText'
import styled from 'styled-components'

const ItemStyles = styled.div`
  text-align:center;
  .experience-item-icon{
    svg{
      width: 3rem;
    }
  }
  .experience-item-title{
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para{
    margin-top: 2rem;

  }
`;

export default function ExpereincesSecItem({
  icon = <MdDesktopMac />,
  title = "web design",
  desc = "Loren ipsum dolor sit amet"
}) {
  return (
    <ItemStyles>
      <div className="experience-item-icon">
        {icon}
        <div className="experience-item-title">{title}</div>
        <PText>
          {desc}
        </PText>
      </div>
    </ItemStyles>
  )
}
