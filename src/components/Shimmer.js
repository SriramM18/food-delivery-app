export const ShimmerCards = () => {
  return (
    <div className="restaurant-lists">
      {Array(6)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-cards">
            <div className="shimmer-cards-img loading-animation"></div>
            <div className="shimmer-cards-lines ">
              {Array(4)
                .fill("")
                .map((e, index) => (
                  <div
                    key={index}
                    className="shimmer-cards-line loading-animation"
                  ></div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export const ShimmerBlock = () => {
  return (
    <div className="shimmer">
      <div className="shimmer-lines">
        {Array(3)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="shimmer-cards-line loading-animation"
            ></div>
          ))}
      </div>
    </div>
  );
};

export const ShimmerLines = () => {
  return (
    <div className="shimmer">
      {Array(6)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-lines">
            {Array(4)
              .fill("")
              .map((e, index) => (
                <div
                  key={index}
                  className="shimmer-cards-line loading-animation"
                ></div>
              ))}
          </div>
        ))}
    </div>
  );
};
