import '../App.css';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

function BudgetSummary() {
    return (
    <div className="generalPage">
        <h2 className="pageHeader">Budget Summary</h2>
        <div className="generalBody">
            <DirectionsBikeIcon style={{marginTop: '250px', marginLeft: '600px', fontSize:'100px'}}/>
        </div>
    </div>
    );
  }

export default BudgetSummary;