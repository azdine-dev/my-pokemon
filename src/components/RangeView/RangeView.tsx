import ProgressBar from "@ramonak/react-progress-bar";

const RangeView : React.FC<{value :string , max :string}> = ({value ='50', max='100'}) => {
    const intValue = parseInt(value);
    const intMax = parseInt(max);

    const percent = (intValue / intMax * 100);

    return (
        <ProgressBar 
         completed={percent}
         maxCompleted={100}
         width="2500%"
         bgColor={percent > 50 ? '#48D0B0':'#FB6C6C'}
         customLabel=" "
        />

    );
}
export default RangeView;
