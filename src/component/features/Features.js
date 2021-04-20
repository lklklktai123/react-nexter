import Feature from './Feature/Feature';
import './Features.scss';
const features = () => {
  const arrFeatures = [
    {
      title: 'World is best luxury homes',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.',
    },
    {
      title: 'Only the best properties',
      content:
        'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.',
    },
    {
      title: 'All homes in in top locations',
      content:
        'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum',
    },
    {
      title: 'New home in one week',
      content:
        'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Top 1% realtors',
      content:
        'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.',
    },
    {
      title: 'Secure payments on nexter',
      content:
        'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.',
    },
  ];

  return (
    <div className="features">
      {arrFeatures.map((feature, index) => (
        <Feature key={index} title={feature.title} content={feature.content} />
      ))}
    </div>
  );
};
export default features;
