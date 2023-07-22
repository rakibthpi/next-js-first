import React from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <p>© 2006-2023 Wix.com, Inc</p>
            </div>
            <div className={styles.social_midea}>
                <Link href={'./'}><Image src="/1.png" width={30} height={30} alt="Picture of the author" /></Link>
                <Link href={'./'}><Image src="/2.png" width={30} height={30} alt="Picture of the author" /></Link>
                <Link href={'./'}><Image src="/3.png" width={30} height={30} alt="Picture of the author" /></Link>
                <Link href={'./'}><Image src="/4.png" width={30} height={30} alt="Picture of the author" /> </Link>
            </div>
        </div>
    );
};

export default Footer;