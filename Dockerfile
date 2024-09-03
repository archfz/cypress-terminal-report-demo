FROM cypress/included:13.13.1

RUN apt-get update && apt-get install -y jq && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y curl && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN	curl -sL https://aka.ms/InstallAzureCLIDeb | bash

COPY . /app
