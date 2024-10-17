
export const GET = async () => {
    const startTime = performance.now();

    const collections =
        [
            {
                tld: '.vibe',
                collectionMintAddress: 'F39nFn3iVahb1jVknHLozK5h3zkCeQe19GqorhM45NAR'
            },
            {
                tld: '.all',
                collectionMintAddress: 'HmGRR2E38Mzc45Euavu4seWbigWR9TzTWuoVTLT4pftp'
            },
            {
                tld: '.eyekon',
                collectionMintAddress: '9k4JRTbaWKLKy8aF8WXzGZU6P1F7iM9BM6NHZx9d4YyZ'
            },
            {
                tld: '.moon',
                collectionMintAddress: '7yQYe84W7a5VgNvtRzsvy7mPRed5gmL9HnvJfsbPWK9J'
            },
            {
                tld: '.meta',
                collectionMintAddress: 'AXzw9xoxfdHRYSrmnuzHzTyYY44cCKRYEUqmSqFaerWj'
            },
            {
                tld: '.samo',
                collectionMintAddress: 'Ytm4hRqQzREnUTJdT3UqsFznqRXLD1otAcksW84PguZ'
            },
            {
                tld: '.myro',
                collectionMintAddress: 'CpGqKCFCpDE5UJZQHUqVJY7geCTNqcBAHRqBYLdd9MQw'
            },
            {
                tld: '.gm',
                collectionMintAddress: 'BWUQCwZTiM6ZGDeiQLJxanimnS5hWL8EMz7rCjxznGFP'
            },
            {
                tld: '.yogg',
                collectionMintAddress: 'AQXXZHgn2AzbtFrCDC8ceggPhgYmmcbHBNBFcfxked9C'
            },
            {
                tld: '.based',
                collectionMintAddress: 'B3aWQNxPiQqSA3PkYmNspLTPDBjMncyAMm7SCDbZcEeK'
            },
            {
                tld: '.letsbonk',
                collectionMintAddress: '8QHUxq9DVVB9cZzNdSahKjLqQAaKtEePP9XETwuVFGuS'
            },
            {
                tld: '.wifhat',
                collectionMintAddress: '9srJSN6tTrupfuCWjU1rcp6EWhWuc4qypKb6PPn2scrA'
            },
            {
                tld: '.hub',
                collectionMintAddress: 'CEdGaD56GcA17bUznwyaET96ZNungy38UsjWK5znwEk1'
            },
            {
                tld: '.dude',
                collectionMintAddress: 'Bmy4Yz31PJ7LgSyFP1JgzbwjCUgiTmCoYoeMSdQTEQPc'
            },
            {
                tld: '.jpeg',
                collectionMintAddress: 'BE25itkTyDJLhz5asqKZb7nE8HAEbn15KdXAQPPs964Z'
            },
            {
                tld: '.slerf',
                collectionMintAddress: '54haLGM6xySUfNSXuJFjtQhyEA46B5Tf9whgd57aDpKg'
            },
            {
                tld: '.rare',
                collectionMintAddress: '2MiwjTU2o9xXpUfK9MTZgAecuxWRsgYdfUTPYUBqy5z9'
            },
            {
                tld: '.random',
                collectionMintAddress: '28waHVix2SKbcG4Vzzgrmg5FSWGvowB4NwbLGLLiaUbo'
            },
            {
                tld: '.basc',
                collectionMintAddress: '83WjWxzNqGox3aBiwaKwyG2XvPKKYvWSQFNQHVGPzLkY'
            },
            {
                tld: '.btc',
                collectionMintAddress: '8tYL5Z8s3qQPUgtfkqQGTibkaXDLXSZoAaVoBXsvuF9U'
            },
            {
                tld: '.poor',
                collectionMintAddress: 'GYLiNNu4pqL6QvZKYHW2EMoibVFm2aVJsPHpUVLcU6pL'
            },
            {
                tld: '.bern',
                collectionMintAddress: 'CQP682myptwEaTazJkD6oXbgyPmUBczA7ckAJSUvEN5f'
            },
            {
                tld: '.goat',
                collectionMintAddress: 'Am3rDxnC4yaJ2Ng3NTY4CBjUiNooHf2JaVgkvPhqy3g9'
            },
            {
                tld: '.test',
                collectionMintAddress: '298TfiQ5JcRRYVscehXgQPXmfgtKHRik2sSCqAoZGSmL'
            },
            {
                tld: '.solmap',
                collectionMintAddress: '9cvfAiPuYqxE3mw4v6WRKRS1iU3FTw9hKe1rrm1JEp5E'
            },
            {
                tld: '.abc',
                collectionMintAddress: '6bsj8ybPa9xsc6pcAme4x6LvhKvtCmgA4TwwG4qtFw5Z'
            },
            {
                tld: '.syndicate',
                collectionMintAddress: 'Gz99ky8NYDRMhTAp13U8Rku8UTq1zveTtLk5ancgVeuo'
            },
            {
                tld: '.hodl',
                collectionMintAddress: 'HaXr8iAcZyxAdTaze8sG9cPBHinxA4ck1sY91kdQTvUT'
            },
            {
                tld: '.wen',
                collectionMintAddress: '3UxC1mr5BoKpqrspBm77GoKrmX211jxHHAr9uUNdd6FL'
            },
            {
                tld: '.wassie',
                collectionMintAddress: '9bPk6k7gZGV8DTjHPRZdk3NHt1vras5aGerBHJAAh1V3'
            },
            {
                tld: '.id',
                collectionMintAddress: '5DVd82aPG8qdRRdZwXchxwoDv1Pf79mee3NBk4NEyPi6'
            },
            {
                tld: '.shgc',
                collectionMintAddress: 'Aahe2rB7ZymGVrrhhGaBg7TLixMyBZMx6K4uSrRSgya1'
            },
            {
                tld: '.slam',
                collectionMintAddress: '4xmb2nqSDHWdHY7VgMJh7vHZd635GwhP8tUQXhL8aNHC'
            },
            {
                tld: '.bonk',
                collectionMintAddress: '86deDknZeDhko46gB8SqK7rYc5HnSBjKDvo6Mi7viYS9'
            },
            {
                tld: '.monke',
                collectionMintAddress: 'CHYZ3UdkHyvWA8rjnCMoPSga1iPZ4RgzfY8GnmgqdpHq'
            },
            {
                tld: '.blink',
                collectionMintAddress: 'GzyF6DbYWsPbZKUUM7yg1ZL3yHtSbQpKYhW2hnkXR6gZ'
            },
            {
                tld: '.solana',
                collectionMintAddress: '6g9hZ47RXaKzD9uS4Wft9vcrRDBp2Y7KDRnJzDocK3mU'
            },
            {
                tld: '.saga',
                collectionMintAddress: '3bSwDPg879mHbbw74o6RNvYnis9XPDhjJ6dnniQQY4EG'
            }
        ]
    const endTime = performance.now();
    const timeTaken = endTime - startTime;

    return Response.json({
        collections,
        timeTaken: timeTaken.toFixed(2) + " ms"
    });
}
