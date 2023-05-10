import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 's1',
    label: 'Source Zinc Risk Sensitivities Data',
  },
  {
    id: 's2',
    label: 'Source Zinc Position Data',
  },
  {
    id: 'p1',
    label: 'Drc Nctp Underlying Importer',
  },
  {
    id: 'p2',
    label: 'Source FRTB ORR Data',
  },
  {
    id: 'p3',
    label: 'Build Ref Data for FRTB For Bucketing',
  },
  {
    id: 'p4',
    label: 'Build Notional Data From Credit Quiver',
  },
  {
    id: 'p5',
    label: 'Source FRTB Reference Data',
  },
  {
    id: 't1',
    label: 'Tranform Data for DRC',
  },
  {
    id: 't2',
    label: 'Transformation for DRC CTP Underlying Kirb',
  },
  {
    id: 't3',
    label: 'Tranform Zinc Data for SBM Calculator',
  },
  {
    id: 't4',
    label: 'Transform Zinc Data for RRAO Calculator',
  },
  {
    id: 'c1',
    label: 'FRTB SBM CSR Non-SEC Calculator',
  },
  {
    id: 'c2',
    label: 'FRTB DRC Non-SEC Calculator',
  },
  {
    id: 'c3',
    label: 'FRTB SBM GIRR Calculator',
  },
  {
    id: 'c4',
    label: 'FRTB SBM CSR SEC NonCTP Calculator',
  },
  {
    id: 'c5',
    label: 'FRTB SBM Equity Calculator',
  },
  {
    id: 'c6',
    label: 'FRTB DRC SecCTP Calculator',
  },
  {
    id: 'c7',
    label: 'FRTB RRAP Calculator',
  },
  {
    id: 'c8',
    label: 'FRTB SBM FX Calculator',
  },
  {
    id: 'c9',
    label: 'FRTB DRC NonCTP Calculator',
  },
  {
    id: 'c10',
    label: 'FRTB SBM Commodity Calculator',
  },
  {
    id: 'c11',
    label: 'FRTB SBM CSR SEC CTP Calculator',
  },
  {
    id: 'exporter',
    label: 'Persistance of data exporter',
  }
];

export const clusters: ClusterNode[] = [
  {
    id: 'source',
    label: 'Source',
    childNodeIds: ['s1', 's2'],
  },
  {
    id: 'preparation',
    label: 'Preparation',
    childNodeIds: ['p1', 'p2', 'p3', 'p4', 'p5'],
  },
  {
    id: 'calculators',
    label: 'Calculators',
    childNodeIds: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11'],
  },
  {
    id: 'transformation',
    label: 'Transformation',
    childNodeIds: ['t1', 't2', 't3', 't4'],
  },
  {
    id: 'export',
    label: 'Exporter',
    childNodeIds: ['exporter'],
  }
];

export const links: Edge[] = [
  {
    id: 'edge_1',
    source: 's1',
    target: 'p3',
    label: ' ',
  },
  {
    id: 'edge_2',
    source: 's2',
    target: 'p3',
    label: ' ',
  },
  {
    id: 'edge_3',
    source: 's1',
    target: 'p5',
    label: ' ',
  },
  {
    id: 'edge_4',
    source: 's2',
    target: 'p5',
    label: ' ',
  },
  {
    id: 'edge_5',
    source: 's1',
    target: 't1',
    label: ' ',
  },
  {
    id: 'edge_6',
    source: 's2',
    target: 't1',
    label: ' ',
  },
  {
    id: 'edge_7',
    source: 'p1',
    target: 't1',
    label: ' ',
  },
  {
    id: 'edge_8',
    source: 'p2',
    target: 't1',
    label: ' ',
  },
  {
    id: 'edge_9',
    source: 'p3',
    target: 't1',
    label: ' ',
  },
  {
    id: 'edge_10',
    source: 'p5',
    target: 't1',
    label: ' ',
  },
  {
    id: 'edge_11',
    source: 's1',
    target: 't2',
    label: ' ',
  },
  {
    id: 'edge_12',
    source: 's2',
    target: 't2',
    label: ' ',
  },
  {
    id: 'edge_13',
    source: 'p2',
    target: 't2',
    label: ' ',
  },
  {
    id: 'edge_14',
    source: 'p3',
    target: 't2',
    label: ' ',
  },
  {
    id: 'edge_15',
    source: 'p4',
    target: 't2',
    label: ' ',
  },
  {
    id: 'edge_16',
    source: 's1',
    target: 't3',
    label: ' ',
  },
  {
    id: 'edge_17',
    source: 's2',
    target: 't3',
    label: ' ',
  },
  {
    id: 'edge_18',
    source: 'p2',
    target: 't3',
    label: ' ',
  },
  {
    id: 'edge_19',
    source: 'p5',
    target: 't3',
    label: ' ',
  },
  {
    id: 'edge_20',
    source: 's2',
    target: 't3',
    label: ' ',
  },
  {
    id: 'edge_21',
    source: 'p5',
    target: 't3',
    label: ' ',
  },
  {
    id: 'edge_23',
    source: 'p5',
    target: 'c1',
    label: ' ',
  },
  {
    id: 'edge_24',
    source: 't3',
    target: 'c1',
    label: ' ',
  },
  {
    id: 'edge_25',
    source: 'p5',
    target: 'c2',
    label: ' ',
  },
  {
    id: 'edge_26',
    source: 't1',
    target: 'c2',
    label: ' ',
  },
  {
    id: 'edge_27',
    source: 'p5',
    target: 'c3',
    label: ' ',
  },
  {
    id: 'edge_28',
    source: 't1',
    target: 'c3',
    label: ' ',
  },
  {
    id: 'edge_29',
    source: 'p5',
    target: 'c4',
    label: ' ',
  },
  {
    id: 'edge_30',
    source: 't1',
    target: 'c4',
    label: ' ',
  },
  {
    id: 'edge_31',
    source: 'p5',
    target: 'c5',
    label: ' ',
  },
  {
    id: 'edge_32',
    source: 't2',
    target: 'c5',
    label: ' ',
  },
  {
    id: 'edge_33',
    source: 't4',
    target: 'c6',
    label: ' ',
  },
  {
    id: 'edge_34',
    source: 'p5',
    target: 'c7',
    label: ' ',
  },
  {
    id: 'edge_35',
    source: 't3',
    target: 'c7',
    label: ' ',
  },
  {
    id: 'edge_36',
    source: 'p5',
    target: 'c8',
    label: ' ',
  },
  {
    id: 'edge_37',
    source: 't1',
    target: 'c8',
    label: ' ',
  },
  {
    id: 'edge_38',
    source: 'p5',
    target: 'c9',
    label: ' ',
  },
  {
    id: 'edge_39',
    source: 't3',
    target: 'c9',
    label: ' ',
  },
  {
    id: 'edge_40',
    source: 'p5',
    target: 'c10',
    label: ' ',
  },
  {
    id: 'edge_41',
    source: 't3',
    target: 'c10',
    label: ' ',
  },
  {
    id: 'edge_42',
    source: 'p5',
    target: 'c11',
    label: ' ',
  },
  {
    id: 'edge_43',
    source: 't3',
    target: 'c11',
    label: ' ',
  },
  {
    id: 'edge_44',
    source: 'c1',
    target: 'exporter',
    label: ' ',
  },
  {
    id: 'edge_45',
    source: 'c2',
    target: 'exporter',
    label: ' ',
  },
  {
    id: 'edge_46',
    source: 'c3',
    target: 'exporter',
    label: ' ',
  },
  {
    id: 'edge_47',
    source: 'c4',
    target: 'exporter',
    label: ' ',
  },
  {
    id: 'edge_48',
    source: 'c5',
    target: 'exporter',
    label: ' ',
  },
  {
    id: 'edge_49',
    source: 'c6',
    target: 'exporter',
    label: ' ',
  },
  {
    id: 'edge_50',
    source: 'c7',
    target: 'exporter',
    label: ' ',
  },
  {
    id: 'edge_51',
    source: 'c8',
    target: 'exporter',
    label: ' ',
  },
  {
    id: 'edge_52',
    source: 'c9',
    target: 'exporter',
    label: ' ',
  },
  {
    id: 'edge_53',
    source: 'c10',
    target: 'exporter',
    label: ' ',
  },
  {
    id: 'edge_54',
    source: 'c11',
    target: 'exporter',
    label: ' ',
  }
];
