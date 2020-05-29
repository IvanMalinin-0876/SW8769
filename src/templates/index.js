import Onyx, { Image as OnyxPreview } from './onyx';
import Pikachu, { Image as PikachuPreview } from './pikachu';
import Gengar, { Image as GengarPreview } from './gengar';
import Castform, { Image as CastformPreview } from './castform';
import Glalie, { Image as GlaliePreview } from './glalie';
import Celebi, { Image as CelebiPreview } from './celebi';

export default [
  {
    key: 'onyx',
    name: 'Texas',
    component: Onyx,
    preview: OnyxPreview,
  },  
  {
    key: 'celebi',
    name: 'Washington',
    component: Celebi,
    preview: CelebiPreview,
  },
  {
    key: 'pikachu',
    name: 'Moskow',
    component: Pikachu,
    preview: PikachuPreview,
  },
  {
    key: 'gengar',
    name: 'Phenian',
    component: Gengar,
    preview: GengarPreview,
  },
  {
    key: 'castform',
    name: 'Ponchare',
    component: Castform,
    preview: CastformPreview,
  },
  {
    key: 'glalie',
    name: 'Tokio',
    component: Glalie,
    preview: GlaliePreview,
  },
  {
    key: 'celebi',
    name: 'Elbuson',
    component: Celebi,
    preview: CelebiPreview,
  },
];
