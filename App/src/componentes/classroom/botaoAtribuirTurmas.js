import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { searchGroups } from '../../actions/classroom'

const BotaoAtribuir = props => {

    const { searchGroups } = props

    return(
        <button className="btn btn-secondary ml-3 mb-3"
            onClick={searchGroups}>
            Atribuir Turmas
        </button>
    )
}

const mapStoreToProps = store => ({
})

const mapActionToProps = dispatch => bindActionCreators({
    searchGroups
}, dispatch)

const conectado = connect(mapStoreToProps, mapActionToProps)(BotaoAtribuir)

export { conectado as BotaoAtribuir }