FROM alpine:latest
RUN apk add python3
RUN apk add py3-pip
RUN python3 -m pip install --upgrade pip
WORKDIR app
COPY . /app
RUN pip3 install -r requirement.txt
EXPOSE 5000
RUN mkdir turshilt
COPY data-service.service ./turshilt
RUN ifconfig
CMD ["python3", "main.py"]



ANELEpls DANCE ANELEpls OR ANELEpls GET ANELEpls BANNED