import React from 'react';

const GuidesComponent = () => {
    // const {id, title, userId} = props;
    return <div className="bg-gradient">
        <section className="content-container">
            <h3 className="title">Technical Analysis Basics:</h3>

            <section className="cards">

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h4>What is TA?</h4>
                        </div>
                        <div className="flip-card-back">
                            <h1>Technical Analysis or TA</h1>
                            <p>Is an analysis methodology
                                for forecasting the direction of prices through the study
                                of past market movements and trends, primarily price and volume.
                            </p>
                            <p>Stock markets & Crypto might seem like they move randomly but with the help of TA
                                we can get an edge and somewhat predict some of it's movements</p>

                            <p>We ain't going to the moon if there’s not much volume… We're also not going to crash!
                                So low volume means a sideways movement at least in the short term.</p>

                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h4>Caution!</h4>
                        </div>
                        <div className="flip-card-back">
                            <h1>Nothing is certain</h1>
                            <p>
                                Everything here is a guide and not pure science, these things will not always work. I
                                recommend always checking at least 2 different indicators as they often consider
                                different things.
                                One
                                might be telling you it’s a good time to buy where another could be indicating the
                                opposite.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h4>Candle stick charts</h4>
                        </div>
                        <div className="flip-card-back">
                            <h1>Use candles please DON’T use the line graph!</h1>
                            <h2>Candles tell you so much more!</h2>
                            <p>
                                From one candle along you can see the volume in relation to the candles around it, the
                                Open, Close, High and Low for it's time frame.
                                It can be very helpful to see prices that were temporarily reached but then reversed.
                                this
                                There are many (probably hundreds) of candlestick patterns that can be an indication or
                                confirmation of future price movements.

                                Trends:
                                Try to draw a line touching the top of at least 3 candles for down trend (the bottom for
                                up trend), the
                                more
                                candles the line touches the stronger the trend. This is a simple way to see if there is
                                a change in
                                trend
                                (A candle breaks through the line by more than a little bit and closes there)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h4>Wedges & Triangle</h4>
                        </div>
                        <div className="flip-card-back">
                            <h1>Wedges & Triangle are some of the most powerful chart patterns.</h1>
                            <p>
                                Draw the trend line above and below and see where they come together.
                                Depending on the shape and slant it might mean a bullish or bearish breakout but either
                                way at the point you can expect a bigger move.
                                (I don’t find this reliable on it’s own and usually combine it with the RSI or another
                                indicator to to confirm)
                            </p>
                            <p>
                                Right-Angled triangles seem to be the most reliable indication of a move.
                                If the Hypotenuse is above the price it's known as a descending triangle and will
                                usually lead to a downward move.
                                The opposite goes for Ascending triangles which have a 60-70% chance of breaking to the
                                upside.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h4>Elliot wave</h4>
                        </div>
                        <div className="flip-card-back">
                            <h1>Basically this is a method of seeing trends in zig-zag wave patterns</h1>
                            <p>
                                There are a lot of rules about Elliot Wave; but to over simplify things the markets main
                                trend is a series of 5 waves.
                                (Waves 1, 3 and 5 are the bigger waves in the direction of the trend while 2 & 4 are
                                smaller counter trend moves)
                                Other important take-aways are that wave 3 is usually the longest but cannot be the
                                shortest wave.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h4>Chart Patterns</h4>
                        </div>
                        <div className="flip-card-back">
                            <h1>There are many patterns in charting some of the common ones are </h1>
                            <p>Head & Shoulders</p>
                            <p>
                                This Bearish pattern signals a trend reversal and can be described as
                                a zig zag that forms a high, followed by another higher high
                                followed by a lower high roughly resembling the shape of a head.
                            </p>
                            <p>Cup & Handle</p>
                            <p>
                                This Bullish pattern is a rounded drop in price, followed by return to the original
                                price
                                range followed by a smaller drop roughly resembling the shape of a tea cup.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h4>Moving Averages</h4>
                        </div>
                        <div className="flip-card-back">
                            <h1>Tell you the average movement of the last x bars</h1>
                            <p>Most important moving averages</p>
                            <br/>
                            <p>Everyone has different opinions on this but Traders generally pay attention to these:
                                21, 55, 200 period Moving Average</p>
                            <p>
                                Buy signal: when shorter (faster ma) crosses over and ends up higher than the bigger
                                (slower ma)
                                Sell signal: when shorter (faster ma) crosses over and ends up lower than the bigger
                                (slower ma)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h4>Oscillators</h4>
                        </div>
                        <div className="flip-card-back">
                            <h1>There are many oscillators</h1>
                            <p>RSI</p>
                            <p>
                                RSI tells us if something is overbought (about to correct) or oversold(about to moon).
                                Again
                                oversimplified
                                it’s the distance of the current price from the moving average price. The normal price
                                range is from
                                30-70
                                below 30 is oversold and above 70 is overbought.
                            </p>
                            <p>MacD</p>
                            <p>
                                Macd stands for: Moving Average Convergence Divergence is a trend-following momentum
                                indicator that shows the relationship between the 12 & 26 period moving averages.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h4>Bollinger Bands</h4>
                        </div>
                        <div className="flip-card-back">
                            <h1>Bollinger Bands</h1>
                            <p>
                                These show the volatility and likely price movements, they lag a little (if there’s a
                                sudden spike the
                                band
                                will take a candle or two to adjust) I try to play with these when there’s a sideways
                                movement as the
                                top
                                middle line and bottom of the bands act as support and resistance. With this you can
                                enter trades at the
                                bottom of a band and know you should sell between the middle or top.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h4>Previous Regions of support or resistance</h4>
                        </div>
                        <div className="flip-card-back">
                            <h1>The past tends to repeat itself.</h1>
                            <p>
                                If you look at any chart you will see that a lot of price ranges that
                                were
                                not broken on the first attempt later become support and don’t immediately get passed
                                when the trend
                                change
                                direction. This is expecially true for numbers that have a psychological affect eg big
                                even’s 1000, 5000
                                10000 etc… maybe smaller numbers depending on timeframes.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h4>Fibonacci retracements</h4>
                        </div>
                        <div className="flip-card-back">
                            <h1>Fibonacci retracements</h1>
                            <p>
                                Fibonacci is everywhere in trading, you will find the fib levels on trading tools tend
                                to line up with
                                previous support and big whole numbers. When I say level or number I mean a rang not an
                                exact number.
                                The
                                most important fib ratios in crypto are usually 0.768, 0.618, 0.382 and 1.618 extension.
                            </p>
                        </div>
                    </div>
                </div>


            </section>

        </section>
    </div>;
}
export default GuidesComponent;