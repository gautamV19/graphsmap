import React, { useEffect, useRef } from 'react';
import { DataSet, Network } from 'vis-network/standalone/esm/vis-network';

const VisNetwork = () => {
    // A reference to the div rendered by this component
    const domNode = useRef(null);

    // A reference to the vis network instance
    const network = useRef(null);

    // An array of nodes
    const nodes = new DataSet([
        { id: 1, label: 'Node 1', group: 'grp1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Node 3' },
        { id: 4, label: 'Node 4' },
        { id: 5, label: 'Node 5' }
    ]);

    // An array of edges
    const edges = new DataSet([
        { from: 1, to: 3 },
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 5, to: 1 }
    ]);

    const data = {
        nodes,
        edges
    };

    const options = {
        autoResize: true,
        clickToUse: true,
        height: '100%',
        width: '100%',
        edges: {
            color: 'orange',
            label: "ed"
        },
        nodes: {
            borderWidth: 0,
            color: {
                hover: "purple",
                highlight: "green",
            },
            label: "jay swaminarayan",
            shape: "box",
            title: "jay swaminarayan",
        },
        groups: {
            grp1: { color: { background: 'pink' }, title: 'jsn' }
        },

    };

    const events = {
        select: function (event) {
            var { nodes, edges } = event;
            console.log("Selected nodes:");
            console.log(nodes);
            console.log("Selected edges:");
            console.log(edges);
        },
    }

    useEffect(
        () => {
            network.current = new Network(domNode.current, data, options);
        },
        [domNode, network, data, options]
    );

    return (
        <div style={{ height: "100vh", width: "100vw" }} ref={domNode} />
    );
};

export default VisNetwork;