import React from 'react';
import { connect } from 'react-redux';

 const Score = ({score}) => (
    <div>
        Score: {score}
    </div>

)
const mapStateToProps = (state, ownProps) => {
    return {
        score: state.score
    }
}
export default connect(
    mapStateToProps
)(Score)