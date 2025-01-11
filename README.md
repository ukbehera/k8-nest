
# Install Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube && rm minikube-linux-amd64

# Start Minikube, it will download and create a K8 enviorement behind the scene
Minikube Start
# Point Your Docker CLI to Minikube's Docker Daemon to load local image
eval $(minikube docker-env)


# Build the Docker image
docker buildx build -t k8-crud-app:latest .

# Use kubectl to create a namespace
kubectl apply -f k8/namespace.yaml

# Use kubectl to apply deployment and service
kubectl -n dev apply -f k8/deployment.yaml
kubectl -n dev apply -f k8/service.yaml

# Get the Minikube External IP
minikube tunnel

# Secrets
kubectl -n dev apply -f k8/application.secret.yml

#### Ingress
kubectl -n dev apply -f k8/ingress.yaml
# Get minikube IP
minikube ip
# Change in hosts to use minikube IP
sudo nano /etc/hosts
# Enable Minikube to detect ingress
minikube addons enable ingress


##### helm ####
# Scafold deployment and all
helm create k8-helm

# Make change to values.yaml and install
helm install k8-helm ./k8-helm

# upgrade
helm upgrade k8-helm ./k8-helm


