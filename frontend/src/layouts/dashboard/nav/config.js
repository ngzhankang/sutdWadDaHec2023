// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  }
];

const userNavConfig = [
  {
    title: 'tuteeDetails',
    path: '/dashboard/tuteeDetails',
    icon: icon('ic_analytics'),
  },
  {
    title: 'tutorDetails',
    path: '/dashboard/tutorDetails',
    icon: icon('ic_analytics'),
  },
  {
    title: 'menteeAssessment',
    path: '/dashboard/menteeAssessment',
    icon: icon('ic_analytics'),
  },
  {
    title: 'tuteeRecords',
    path: '/dashboard/tuteeRecords',
    icon: icon('ic_analytics'),
  },
]

export default {navConfig, userNavConfig};
