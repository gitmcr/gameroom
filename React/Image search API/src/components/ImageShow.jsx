function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt={image.description} />
    </div>
  );
}

export default ImageShow;
