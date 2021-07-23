import React from 'react'
import Layout from '../../components/layout'
import * as styles from '../../styles/projects.module.css'

export default function Projects() {
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Портфолио</h2>
                <h3>Проекты и созданные сайты</h3>
            </div>
        </Layout>
    )
}
