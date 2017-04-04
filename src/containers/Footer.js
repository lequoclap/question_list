import React from 'react';
import { connect } from 'react-redux';
import {filterQuestions} from '../actions'
import Tag from '../components/Tag'
import {ActionTypes, FormStatus, FilterTags} from '../core/constants';

 const Footer = ({currentTag, filterQuestions}) => (
     <div>
        Tags: 
        <Tag name="All" onClick={()=>filterQuestions(FilterTags.ALL)} isDisplay={currentTag == FilterTags.ALL}/>
        ,<Tag name="Odd id"  onClick={()=>filterQuestions(FilterTags.ODD)} isDisplay={currentTag == FilterTags.ODD}/>
        ,<Tag name="Even id" onClick={()=>filterQuestions(FilterTags.EVEN)} isDisplay={currentTag == FilterTags.EVEN}/>
    </div>

)
const mapStateToProps = (state, ownProps) => {
    return {
        currentTag: state.footer.currentTag
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        filterQuestions: (tag) => {
            dispatch(filterQuestions(tag))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)