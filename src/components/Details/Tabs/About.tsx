const About : React.FC<{pokemon:any}> = ({pokemon}) => {
    
    const types = pokemon?.types?.map( (t :any ) => t?.type.name ).join( ', ' );

	const abilities = pokemon?.abilities?.map(  (ab :any) => {
		return ab?.ability.name.replace( '-', ' ' );
	} ).join( ', ' );

	const height = pokemon?.measurements?.height * 10; // cm
	const weight = pokemon?.measurements?.weight / 10; // kg
    return (
        <div className="tab tab-about">
			<table>
				<tbody>
					<tr>
						<td>Species</td>
						<td>{ types }</td>
					</tr>

					<tr>
						<td>Height</td>
						<td>{ height } cm</td>
					</tr>

					<tr>
						<td>Weight</td>
						<td>{weight} kg</td>
					</tr>

					<tr>
						<td>Abilities</td>
						<td>{abilities }</td>
					</tr>
				</tbody>
			</table>
		</div>
    );
}

export default About;