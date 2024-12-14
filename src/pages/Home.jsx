import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

import ntfPreviewCard from './nft-preview-card-component-main/design/desktop-preview.jpg'


export default function Home() {


  return (
    <div className={styles.wrapper}>
      <h1>Fronten mentor project</h1>
      <div className={styles.container}>
        <Link to="/ntf-preview-card" className={styles.chalengeCard}>
			<img src={ntfPreviewCard} alt="" className={styles.cardImg} />
			<p className={styles.cardTitle}>NTF preview card</p>
		</Link>
      </div>
    </div>
  )
}
