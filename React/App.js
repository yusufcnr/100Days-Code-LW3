import { func } from 'prop-types';
import { useState } from 'react';
function Square({ value, onSquareClick }) {
    return (
        <button className="square" onclick={onSquareClick}
        > {value}
        </button>
    );
}

function Board()