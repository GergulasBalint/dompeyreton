import styles from '@/styles/pricing/MainContent.module.css';
import { useTranslation } from 'next-i18next';

const MainContent = () => {
	const { t } = useTranslation('common');

	return (
		<div className={`container-fluid ${styles.background}`}>
			<div className='container'>
				<div className={`row ${styles.row}`}>
					<div className={`col-12 col-lg-6 ${styles.tableContainer}`}>
						<div className={styles.textContainer}>
							<h2>{t('reservations.table1Heading')}</h2>
							<table className={styles.pricingTable}>
								<thead className={styles.tableHead}>
									<tr className={styles.tableRow}>
										<td className={styles.tableData}>{t('reservations.tableSeason')}</td>
										<td className={styles.tableData}>{t('reservations.tableStart')}</td>
										<td className={styles.tableData}>{t('reservations.tableFinish')}</td>
										<td className={styles.tableData}>
											{t('reservations.tableLodge')}{' '}
											<span>{t('reservations.tableLodgeSpan')}</span>
										</td>
										<td className={styles.tableData}>
											{t('reservations.tableBarn')}{' '}
											<span>{t('reservations.tableBarnSpan')}</span>
										</td>
										<td className={styles.tableData}>
											{t('reservations.tableCombined')}{' '}
											<span>{t('reservations.tableCombinedSpan')}</span>
										</td>
									</tr>
								</thead>
								<tbody>
									<tr className={styles.tableRow}>
										<td className={styles.tableData}>{t('reservations.tablePeak')}</td>
										<td className={styles.tableData}>6-Jul-24</td>
										<td className={styles.tableData}>6-Sep-24</td>
										<td className={styles.tableData}>&euro;1,751</td>
										<td className={styles.tableData}>&euro;2,575</td>
										<td className={styles.tableData}>&euro;4,326</td>
									</tr>
									<tr className={styles.tableRow}>
										<td className={styles.tableData}>{t('reservations.tableHigh')}</td>
										<td className={styles.tableData}>
											25-May-24
											<br />
											7-Sep-24
											<br />
											21-Dec-24
										</td>
										<td className={styles.tableData}>
											5-July-24
											<br />
											11-Oct-24
											<br />
											3-Jan-25
										</td>
										<td className={styles.tableData}>&euro;1,488</td>
										<td className={styles.tableData}>&euro;2,189</td>
										<td className={styles.tableData}>&euro;3,677</td>
									</tr>
									<tr className={styles.tableRow}>
										<td className={styles.tableData}>{t('reservations.tableMedium')}</td>
										<td className={styles.tableData}>6-Apr-24</td>
										<td className={styles.tableData}>24-May-24</td>
										<td className={styles.tableData}>&euro;1,313</td>
										<td className={styles.tableData}>&euro;1,931</td>
										<td className={styles.tableData}>&euro;3,245</td>
									</tr>
									<tr className={styles.tableRow}>
										<td className={styles.tableData}>{t('reservations.tableLow')}</td>
										<td className={styles.tableData}>
											6-Jan-24
											<br />
											12-Oct-24
										</td>
										<td className={styles.tableData}>
											5-Apr-24
											<br />
											20-Dec-24
										</td>
										<td className={styles.tableData}>&euro;1,138</td>
										<td className={styles.tableData}>&euro;1,674</td>
										<td className={styles.tableData}>&euro;2,812</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className={`col-12 col-lg-6 ${styles.tableContainer}`}>
						<div className={styles.textContainer}>
							<h2>{t('reservations.table2Heading')}</h2>
							<table className={styles.pricingTable}>
								<thead className={styles.tableHead}>
									<tr className={styles.tableRow}>
										<td className={styles.tableData}>{t('reservations.tableSeason')}</td>
										<td className={styles.tableData}>{t('reservations.tableStart')}</td>
										<td className={styles.tableData}>{t('reservations.tableFinish')}</td>
										<td className={styles.tableData}>
											{t('reservations.tableLodge')}{' '}
											<span>{t('reservations.tableLodgeSpan')}</span>
										</td>
										<td className={styles.tableData}>
											{t('reservations.tableBarn')}{' '}
											<span>{t('reservations.tableBarnSpan')}</span>
										</td>
										<td className={styles.tableData}>
											{t('reservations.tableCombined')}{' '}
											<span>{t('reservations.tableCombinedSpan')}</span>
										</td>
									</tr>
								</thead>
								<tbody>
									<tr className={styles.tableRow}>
										<td className={styles.tableData}>{t('reservations.tablePeak')}</td>
										<td className={styles.tableData}>5-Jul-25</td>
										<td className={styles.tableData}>5-Sep-25</td>
										<td className={styles.tableData}>&euro;1,821</td>
										<td className={styles.tableData}>&euro;2,678</td>
										<td className={styles.tableData}>&euro;4,499</td>
									</tr>
									<tr className={styles.tableRow}>
										<td className={styles.tableData}>{t('reservations.tableHigh')}</td>
										<td className={styles.tableData}>
											24-May-25
											<br />
											6-Sep-25
											<br />
											20-Dec-25
										</td>
										<td className={styles.tableData}>
											4-Jul-25
											<br />
											10-Oct-25
											<br />
											2-Jan-26
										</td>
										<td className={styles.tableData}>&euro;1,548</td>
										<td className={styles.tableData}>&euro;2,276</td>
										<td className={styles.tableData}>&euro;3,824</td>
									</tr>
									<tr className={styles.tableRow}>
										<td className={styles.tableData}>{t('reservations.tableMedium')}</td>
										<td className={styles.tableData}>5-Apr-25</td>
										<td className={styles.tableData}>23-May-25</td>
										<td className={styles.tableData}>&euro;1,366</td>
										<td className={styles.tableData}>&euro;2,009</td>
										<td className={styles.tableData}>&euro;3,374</td>
									</tr>
									<tr className={styles.tableRow}>
										<td className={styles.tableData}>{t('reservations.tableLow')}</td>
										<td className={styles.tableData}>
											4-Jan-25
											<br />
											11-Oct-25
										</td>
										<td className={styles.tableData}>
											4-Apr-25
											<br />
											19-Dec-25
										</td>
										<td className={styles.tableData}>&euro;1,184</td>
										<td className={styles.tableData}>&euro;1,741</td>
										<td className={styles.tableData}>&euro;2,924</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className='col-12'>
						<p className={styles.subtext}>{t('reservations.tableInfoText')}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
