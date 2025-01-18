import styles from '../styles/IntroContent.module.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'next-i18next';

const IntroContent = () => {
	const [showAllInclusive, setShowAllInclusive] = useState(false);

	const handleAllInclusiveClose = () => setShowAllInclusive(false);
	const handleAllInclusiveShow = () => setShowAllInclusive(true);

	const { t } = useTranslation('common');

	return (
		<div className={`container ${styles.mainContainer}`}>
			<div className={`row`}>
				<div className='col-12 col-lg-6'>
					<div className={styles.focusContainer}>
						<h2 className={`${styles.focusText} "goldText"`}>
							{t('taglines.tranquillity')}
						</h2>
						<h2 className={`${styles.focusText} "goldText"`}>
							{t('taglines.relaxation')}
						</h2>
						<h2 className={`${styles.focusText} "goldText"`}>{t('taglines.privacy')}</h2>
					</div>
				</div>
				<div className='col-12 col-lg-6'>
					<div className={styles.introContainer}>
						<h1 className={styles.introTitle}>{t('home.introContentTitle')}</h1>
						<p className={styles.introText}>
							{t('home.introContentTextPart1')}{' '}
							<span className={styles.terms} onClick={handleAllInclusiveShow}>
								{t('home.allInclusive')}
							</span>{' '}
							{t('home.introContentTextPart2')}
						</p>
						<Modal
							show={showAllInclusive}
							onHide={handleAllInclusiveClose}
							className={`${styles.modal}`}
						>
							<Modal.Header closeButton>
								<Modal.Title>{t('home.allInclusiveModalHeading')}</Modal.Title>
							</Modal.Header>
							<Modal.Body>{t('home.allInclusiveModalText')}</Modal.Body>
							<Modal.Footer>
								<Button
									className='rounded-0'
									variant='dark'
									onClick={handleAllInclusiveClose}
								>
									{t('util.closeButton')}
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IntroContent;
