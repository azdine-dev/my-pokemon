import RangeView from "../../RangeView/RangeView";

const labels = [
	'HP',
	'Attack',
	'Defense',
	'Sp. Atk',
	'Sp. Def',
	'Speed',
];


const BaseStats : React.FC<{stats:any}> = ({stats}) => {
    const total = stats?.reduce( ( sum:any, current:any ) => sum + parseInt( current.base_stat ), 0 );

    return (
<div className="tab tab-base-stats">
			<table>
				<tbody>
					{
						labels.map( ( label, i ) => (
							<tr key={ label } className="table-row">
								<td>{ label }</td>
								<td>
									<div>{ stats[ i ].base_stat }</div>
									<RangeView value={ stats?.[ i ].base_stat } max="100" />
								</td>
							</tr>
						) )
					}

					<tr className="table-row">
						<td>Total</td>
						<td >
                        <div>{ total }</div>	
						  <RangeView value={ total } max="600" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    );
}


export default BaseStats;